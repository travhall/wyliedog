import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const meta: Meta<typeof Card> = {
  title: 'Components/Layout & Structure/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="p-6">
        <p>A simple card with just content.</p>
      </CardContent>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card className="w-[350px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        className="w-full h-[200px] object-cover"
      />
      <CardHeader>
        <CardTitle>Photo Card</CardTitle>
        <CardDescription>Beautiful landscape photography</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card includes an image at the top, followed by content below.</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">View Gallery</Button>
      </CardFooter>
    </Card>
  ),
};

export const ProfileCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <CardTitle className="text-lg">John Doe</CardTitle>
          <CardDescription>Software Engineer</CardDescription>
        </div>
        <Badge variant="secondary">Pro</Badge>
      </CardHeader>
      <Separator />
      <CardContent className="pt-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Projects</span>
            <span className="text-sm font-medium">23</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Contributions</span>
            <span className="text-sm font-medium">1.2k</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Followers</span>
            <span className="text-sm font-medium">892</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="space-x-2">
        <Button className="flex-1">Follow</Button>
        <Button variant="outline" className="flex-1">Message</Button>
      </CardFooter>
    </Card>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card className="w-[300px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&dpr=2&q=80"
        alt="Product"
        className="w-full h-[200px] object-cover"
      />
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">Wireless Headphones</CardTitle>
            <CardDescription>Premium sound quality</CardDescription>
          </div>
          <Badge>New</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">$199</span>
            <div className="flex items-center space-x-1">
              <span className="text-sm text-muted-foreground line-through">$249</span>
              <Badge variant="destructive" className="text-xs">20% OFF</Badge>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="flex text-yellow-400">
              ★★★★★
            </div>
            <span className="text-sm text-muted-foreground">(4.8)</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="space-x-2">
        <Button className="flex-1">Add to Cart</Button>
        <Button variant="outline" size="icon">
          ♡
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const StatCard: Story = {
  render: () => (
    <Card className="w-[200px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <path d="M12 2v20m9-9H3" />
        </svg>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$45,231.89</div>
        <p className="text-xs text-muted-foreground">
          +20.1% from last month
        </p>
      </CardContent>
    </Card>
  ),
};

export const NotificationCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Notifications</CardTitle>
          <Badge variant="secondary">3</Badge>
        </div>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-8 w-8">
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Alex Brown</p>
            <p className="text-sm text-muted-foreground">Sent you a message</p>
          </div>
          <div className="text-xs text-muted-foreground">2m ago</div>
        </div>
        <Separator />
        <div className="flex items-center space-x-4">
          <Avatar className="h-8 w-8">
            <AvatarFallback>CM</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Casey Miller</p>
            <p className="text-sm text-muted-foreground">Liked your photo</p>
          </div>
          <div className="text-xs text-muted-foreground">5m ago</div>
        </div>
        <Separator />
        <div className="flex items-center space-x-4">
          <Avatar className="h-8 w-8">
            <AvatarFallback>DJ</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">David Johnson</p>
            <p className="text-sm text-muted-foreground">Started following you</p>
          </div>
          <div className="text-xs text-muted-foreground">1h ago</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Mark all as read</Button>
      </CardFooter>
    </Card>
  ),
};