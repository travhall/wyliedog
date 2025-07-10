import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle } from 'lucide-react';

const meta: Meta = {
  title: 'Patterns & Compositions/Form Patterns',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

export const BasicForm: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
        <CardDescription>
          Please fill out your contact details below.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="Enter your first name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Enter your last name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="Enter your phone number" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" />
          <Label htmlFor="newsletter" className="text-sm">
            Subscribe to our newsletter
          </Label>
        </div>
        <div className="flex space-x-2 pt-4">
          <Button variant="outline" className="flex-1">Cancel</Button>
          <Button className="flex-1">Save</Button>
        </div>
      </CardContent>
    </Card>
  ),
};

export const ValidationStates: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Form Validation</CardTitle>
        <CardDescription>
          Examples of different validation states.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="validField">Valid Field</Label>
          <div className="relative">
            <Input 
              id="validField" 
              value="john@example.com" 
              className="border-green-500 focus:border-green-500" 
            />
            <CheckCircle className="absolute right-3 top-2.5 h-4 w-4 text-green-500" />
          </div>
          <p className="text-sm text-green-600">Email address is valid</p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="errorField">Invalid Field</Label>
          <div className="relative">
            <Input 
              id="errorField" 
              value="invalid-email" 
              className="border-red-500 focus:border-red-500" 
            />
            <AlertCircle className="absolute right-3 top-2.5 h-4 w-4 text-red-500" />
          </div>
          <p className="text-sm text-red-600">Please enter a valid email address</p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="requiredField">
            Required Field <span className="text-red-500">*</span>
          </Label>
          <Input id="requiredField" placeholder="This field is required" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="optionalField">
            Optional Field <Badge variant="secondary" className="ml-1 text-xs">Optional</Badge>
          </Label>
          <Input id="optionalField" placeholder="This field is optional" />
        </div>
      </CardContent>
    </Card>
  ),
};

export const MultiStepForm: Story = {
  render: () => (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Account Setup</CardTitle>
        <CardDescription>Step 2 of 3: Personal Information</CardDescription>
        <div className="flex space-x-2 mt-4">
          <div className="flex-1 h-2 bg-primary rounded" />
          <div className="flex-1 h-2 bg-primary rounded" />
          <div className="flex-1 h-2 bg-gray-200 rounded" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="John" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Doe" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="birthDate">Date of Birth</Label>
          <Input id="birthDate" type="date" />
        </div>
        
        <div className="space-y-2">
          <Label>Gender</Label>
          <RadioGroup defaultValue="prefer-not-to-say" className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="prefer-not-to-say" id="prefer-not-to-say" />
              <Label htmlFor="prefer-not-to-say">Prefer not to say</Label>
            </div>
          </RadioGroup>
        </div>
        
        <Separator />
        
        <div className="flex justify-between pt-4">
          <Button variant="outline">Previous</Button>
          <Button>Next</Button>
        </div>
      </CardContent>
    </Card>
  ),
};

export const FormWithSections: Story = {
  render: () => (
    <Card className="w-[600px]">
      <CardHeader>
        <CardTitle>Profile Settings</CardTitle>
        <CardDescription>
          Update your profile information and preferences.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-3">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Doe" />
            </div>
          </div>
          <div className="space-y-2 mt-4">
            <Label htmlFor="bio">Bio</Label>
            <Textarea 
              id="bio" 
              placeholder="Tell us about yourself" 
              className="min-h-[100px]"
            />
          </div>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="text-lg font-medium mb-3">Contact Information</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="text-lg font-medium mb-3">Preferences</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger>
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-3">
              <Label>Notifications</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="emailNotifications" defaultChecked />
                  <Label htmlFor="emailNotifications">Email notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="pushNotifications" />
                  <Label htmlFor="pushNotifications">Push notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="marketingEmails" />
                  <Label htmlFor="marketingEmails">Marketing emails</Label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-2 pt-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  ),
};