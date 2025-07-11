import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Search, Filter, ChevronDown } from 'lucide-react';

const meta: Meta = {
  title: 'Patterns/Data Patterns',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', role: 'admin', lastLogin: '2 hours ago' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive', role: 'user', lastLogin: '1 day ago' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'active', role: 'user', lastLogin: '5 minutes ago' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'pending', role: 'user', lastLogin: 'Never' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', status: 'active', role: 'editor', lastLogin: '3 hours ago' },
];

export const TableWithFiltering: Story = {
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [roleFilter, setRoleFilter] = useState<string>('all');
    
    const filteredData = sampleData.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      const matchesRole = roleFilter === 'all' || item.role === roleFilter;
      
      return matchesSearch && matchesStatus && matchesRole;
    });
    
    return (
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">Table with Filtering</h2>
          <p className="text-muted-foreground mb-6">
            Interactive data table with search and filter capabilities.
          </p>
        </div>
        
        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="editor">Editor</SelectItem>
              <SelectItem value="user">User</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Results Count */}
        <div className="text-sm text-muted-foreground">
          Showing {filteredData.length} of {sampleData.length} users
        </div>
        
        {/* Table */}
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={user.status === 'active' ? 'default' : 
                                user.status === 'inactive' ? 'secondary' : 'outline'}
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="capitalize">{user.role}</TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No users found matching your criteria
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  },
};

export const SearchWithResults: Story = {
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<any[]>([]);
    
    const handleSearch = (value: string) => {
      setSearchTerm(value);
      if (value.length > 2) {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
          const filtered = sampleData.filter(item => 
            item.name.toLowerCase().includes(value.toLowerCase()) ||
            item.email.toLowerCase().includes(value.toLowerCase())
          );
          setResults(filtered);
          setIsLoading(false);
        }, 500);
      } else {
        setResults([]);
      }
    };
    
    return (
      <div className="space-y-4 max-w-md">
        <div>
          <h2 className="text-2xl font-bold mb-2">Search with Results</h2>
          <p className="text-muted-foreground mb-6">
            Real-time search with loading states and result formatting.
          </p>
        </div>
        
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for users..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        
        {/* Results */}
        {searchTerm.length > 2 && (
          <div className="border rounded-lg p-4 space-y-3">
            {isLoading ? (
              // Loading State
              <div className="space-y-3">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ) : results.length > 0 ? (
              // Results
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground mb-3">
                  Found {results.length} result{results.length !== 1 ? 's' : ''}
                </div>
                {results.map((result) => (
                  <div key={result.id} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded cursor-pointer">
                    <div>
                      <div className="font-medium text-sm">{result.name}</div>
                      <div className="text-xs text-muted-foreground">{result.email}</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {result.role}
                    </Badge>
                  </div>
                ))}
              </div>
            ) : (
              // No Results
              <div className="text-center py-4 text-muted-foreground text-sm">
                No results found for "{searchTerm}"
              </div>
            )}
          </div>
        )}
        
        {searchTerm.length > 0 && searchTerm.length <= 2 && (
          <div className="text-xs text-muted-foreground">
            Type at least 3 characters to search
          </div>
        )}
      </div>
    );
  },
};

export const DataLoadingStates: Story = {
  render: () => {
    const [loadingState, setLoadingState] = useState<'idle' | 'loading' | 'loaded' | 'error'>('idle');
    
    const simulateLoading = () => {
      setLoadingState('loading');
      setTimeout(() => {
        // Randomly succeed or fail
        setLoadingState(Math.random() > 0.3 ? 'loaded' : 'error');
      }, 2000);
    };
    
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Data Loading States</h2>
          <p className="text-muted-foreground mb-6">
            Different states for data loading, success, and error scenarios.
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button onClick={simulateLoading} disabled={loadingState === 'loading'}>
            Load Data
          </Button>
          <Button variant="outline" onClick={() => setLoadingState('idle')}>
            Reset
          </Button>
        </div>
        
        <div className="border rounded-lg p-6">
          {loadingState === 'idle' && (
            <div className="text-center py-8">
              <div className="text-muted-foreground mb-4">Ready to load data</div>
              <Button onClick={simulateLoading}>Load Data</Button>
            </div>
          )}
          
          {loadingState === 'loading' && (
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 py-4">
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                <span className="text-sm">Loading data...</span>
              </div>
              
              {/* Skeleton Loading */}
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {loadingState === 'loaded' && (
            <div className="space-y-4">
              <div className="text-center text-green-600 font-medium mb-4">
                ✓ Data loaded successfully
              </div>
              
              {/* Sample Loaded Data */}
              <div className="space-y-3">
                {sampleData.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-3 bg-muted/20 rounded">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      {item.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-muted-foreground">{item.email}</div>
                    </div>
                    <Badge variant="outline">{item.status}</Badge>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {loadingState === 'error' && (
            <div className="text-center py-8">
              <div className="text-red-600 font-medium mb-2">✗ Failed to load data</div>
              <div className="text-sm text-muted-foreground mb-4">
                Something went wrong while loading the data. Please try again.
              </div>
              <Button onClick={simulateLoading} variant="outline">
                Retry
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  },
};