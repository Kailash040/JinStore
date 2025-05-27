'use client';
import React, { useState } from 'react';
import { Search, MapPin, User, Heart, ShoppingCart, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export default function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="bg-purple-600 text-white text-center py-2 text-sm">
        FREE delivery & 40% Discount for next 3 orders! Place your 1st order in
        <span className="ml-2">Until the end of the sale: 63 days 15 hours 51 minutes 07 seconds</span>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          {/* Top Header */}
          <div className="flex justify-between items-center py-2 text-sm text-gray-600">
            <div className="flex space-x-4">
              <span>About Us</span>
              <span>My account</span>
              <span>Wishlist</span>
              <span>We deliver to you every day from 7:00 to 23:00</span>
            </div>
            <div className="flex space-x-4">
              <span>English</span>
              <span>USD</span>
              <span>Order Tracking</span>
            </div>
          </div>

          {/* Main Header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <div className="bg-orange-500 text-white p-2 rounded-lg mr-3">
                <span className="font-bold text-xl">JS</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">JinStore</h1>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Deliver to</span>
              <span className="font-semibold">All</span>
            </div>

            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for products, categories or brands..."
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg"
                />
                <Button className="absolute right-0 top-0 h-full px-4 bg-orange-500 hover:bg-orange-600 rounded-r-lg">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <User className="h-5 w-5" />
                <div className="text-sm">
                  <div>Sign in</div>
                  <div className="font-semibold">Account</div>
                </div>
              </div>
              <div className="relative">
                <Heart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </div>
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-between py-3 border-t">
            <div className="flex space-x-8">
              <span className="hover:text-orange-500 cursor-pointer">Home</span>
              <span className="hover:text-orange-500 cursor-pointer">Shop</span>
              <span className="hover:text-orange-500 cursor-pointer">Fruits & Vegetables</span>
              <span className="hover:text-orange-500 cursor-pointer">Beverages</span>
              <span className="hover:text-orange-500 cursor-pointer">Blog</span>
              <span className="hover:text-orange-500 cursor-pointer">Contact</span>
            </div>
            <div className="flex space-x-4">
              <span className="hover:text-orange-500 cursor-pointer">Trending Products</span>
              <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">Almost Finished</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">
          <span>Home</span> / <span>My account</span>
        </div>
      </div>

      {/* Login Form */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 inline-block border-b-2 border-purple-600 pb-2">Login</h2>
            <span className="text-gray-400 ml-4 text-xl">Register</span>
          </div>

          <p className="text-center text-gray-600 mb-6">
            If you have an account, sign in with your username or email address.
          </p>

          <div className="space-y-4">
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-1">
                Username or email address *
              </div>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <div className="block text-sm font-medium text-gray-700 mb-1">
                Password *
              </div>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={setRememberMe}
                />
                <div className="text-sm text-gray-600">
                  Remember me
                </div>
              </div>
              <div className="text-sm text-blue-600 hover:underline cursor-pointer">
                Lost your password?
              </div>
            </div>

            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg">
              Log in
            </Button>
          </div>
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-2">Join our newsletter for £10 offs</h3>
            <p className="text-gray-600 mb-6">Register now to get latest updates on promotions & coupons. Don't worry, we not spam!</p>
            
            <div className="flex">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 rounded-l-lg border-r-0"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 px-6 rounded-r-lg">
                SEND
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 mt-2">
              By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Help Section */}
            <div>
              <h4 className="font-semibold mb-4">Do You Need Help ?</h4>
              <p className="text-sm text-gray-600 mb-4">
                Autoseligen xyz: Nilus idenae consectetur Illüdda Sed etiam ut ante. Press Illunissim.
              </p>
              <div className="flex items-center text-sm mb-2">
                <Phone className="h-4 w-4 mr-2" />
                <span>Monday-Friday: 08am-9pm</span>
              </div>
              <div className="font-bold text-lg">0 800 300-353</div>
              <div className="flex items-center text-sm mt-4">
                <Mail className="h-4 w-4 mr-2" />
                <span>Need help with your order?</span>
              </div>
              <div className="font-semibold">info@example.com</div>
            </div>

            {/* Make Money */}
            <div>
              <h4 className="font-semibold mb-4">Make Money with Us</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Sell on Grogin</li>
                <li>Sell Your Services on Grogin</li>
                <li>Sell on Grogin Business</li>
                <li>Sell Your Apps on Grogin</li>
                <li>Become an Affiliate</li>
                <li>Advertise Your Products</li>
                <li>Self-Publish with Us</li>
                <li>Become an Blowwe Vendor</li>
              </ul>
            </div>

            {/* Let Us Help You */}
            <div>
              <h4 className="font-semibold mb-4">Let Us Help You</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Accessibility Statement</li>
                <li>Your Orders</li>
                <li>Returns & Replacements</li>
                <li>Shipping Rates & Policies</li>
                <li>Refund and Returns Policy</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Cookie Settings</li>
                <li>Help Center</li>
              </ul>
            </div>

            {/* Get to Know Us */}
            <div>
              <h4 className="font-semibold mb-4">Get to Know Us</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Careers for Grogin</li>
                <li>About Grogin</li>
                <li>Investor Relations</li>
                <li>Grogin Devices</li>
                <li>Customer reviews</li>
                <li>Social Responsibility</li>
                <li>Store Locations</li>
              </ul>
            </div>

            {/* Download App */}
            <div>
              <h4 className="font-semibold mb-4">Download our app</h4>
              <div className="space-y-3">
                <div className="bg-black text-white p-2 rounded flex items-center">
                  <div className="mr-2">📱</div>
                  <div>
                    <div className="text-xs">Download App Get</div>
                    <div className="text-sm font-semibold">-10% Discount</div>
                  </div>
                </div>
                <div className="bg-black text-white p-2 rounded flex items-center">
                  <div className="mr-2">🍎</div>
                  <div>
                    <div className="text-xs">Download App Get</div>
                    <div className="text-sm font-semibold">-20% Discount</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h5 className="font-semibold mb-3">Follow us on social media</h5>
                <div className="flex space-x-3">
                  <Facebook className="h-5 w-5 text-blue-600 cursor-pointer" />
                  <Twitter className="h-5 w-5 text-blue-400 cursor-pointer" />
                  <Instagram className="h-5 w-5 text-pink-600 cursor-pointer" />
                  <Linkedin className="h-5 w-5 text-blue-700 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t mt-8 pt-8 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Copyright 2024 © Janstore WooCommerce WordPress Theme. All right reserved. Powered by 
                <span className="text-red-500"> BlackStee Themes.</span>
              </span>
            </div>
            <div className="flex space-x-4 text-sm text-gray-600">
              <span>Terms and Conditions</span>
              <span>Privacy Policy</span>
              <span>Order Tracking</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center space-x-4 mt-4">
            <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm">VISA</div>
            <div className="bg-orange-500 text-white px-2 py-1 rounded text-sm">MC</div>
            <div className="bg-blue-500 text-white px-2 py-1 rounded text-sm">PayPal</div>
            <div className="bg-purple-600 text-white px-2 py-1 rounded text-sm">Skrill</div>
            <div className="bg-pink-500 text-white px-2 py-1 rounded text-sm">Klarna</div>
          </div>
        </div>
      </footer>
    </div>
  );
}