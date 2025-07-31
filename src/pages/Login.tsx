import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, Lock, Eye, EyeOff, Truck } from "lucide-react";
import Header from "@/components/Header";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-logistics-orange to-logistics-blue p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-logistics-navy mb-2">
              Welcome Back
            </h1>
            <p className="text-muted-foreground">
              Sign in to track your packages and manage shipments
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sign In to Your Account</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-9 pr-9"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 h-4 w-4 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </label>
                  <a href="#" className="text-logistics-blue hover:underline">
                    Forgot password?
                  </a>
                </div>

                <Button className="w-full" size="lg">
                  Sign In
                </Button>
              </form>

              <Separator />

              <div className="space-y-4">
                <Button variant="outline" className="w-full">
                  Continue with Google
                </Button>
                
                <div className="text-center text-sm">
                  <span className="text-muted-foreground">Don't have an account? </span>
                  <a href="#" className="text-logistics-blue hover:underline font-medium">
                    Create Account
                  </a>
                </div>
              </div>

              <div className="bg-logistics-light p-4 rounded-lg">
                <h3 className="font-semibold text-sm mb-2">Quick Access</h3>
                <div className="space-y-2 text-sm">
                  <div>• Track packages without logging in</div>
                  <div>• Get shipping quotes instantly</div>
                  <div>• View delivery locations</div>
                  <div>• Contact customer support</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>Secure login protected by SSL encryption</p>
            <p className="mt-2">🇨🇦➡️🇳🇬 Connecting Canada to Nigeria since 2015</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;