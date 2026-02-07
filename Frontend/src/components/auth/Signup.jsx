import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { User, Mail, Lock, Eye, EyeOff, Sparkles } from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      <div className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-md bg-[#1a1a1a] border-gray-800 shadow-2xl">
          <CardContent className="pt-8 pb-8 px-8">
            <div className="space-y-6">
              <div className="space-y-2 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 shadow-lg shadow-pink-500/50 mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Create Account
                </h2>
                <p className="text-gray-400">
                  Join us and start your journey today
                </p>
              </div>

              <form  className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="pl-10 bg-[#0a0a0a] border-gray-700 text-white placeholder:text-gray-600 focus:border-pink-500 focus:ring-pink-500/20"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10 bg-[#0a0a0a] border-gray-700 text-white placeholder:text-gray-600 focus:border-pink-500 focus:ring-pink-500/20"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      id="password"
                      name="password"
                      // type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10 pr-10 bg-[#0a0a0a] border-gray-700 text-white placeholder:text-gray-600 focus:border-pink-500 focus:ring-pink-500/20"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {/* {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )} */}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-gray-300">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      // type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10 pr-10 bg-[#0a0a0a] border-gray-700 text-white placeholder:text-gray-600 focus:border-pink-500 focus:ring-pink-500/20"
                      required
                    />
                    <button
                      type="button"
                      // onClick={() =>
                      //   setShowConfirmPassword(!showConfirmPassword)
                      // }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {/* {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )} */}
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-2 text-sm">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 mt-0.5 rounded border-gray-700 bg-[#0a0a0a] text-pink-500 focus:ring-pink-500 focus:ring-offset-0"
                    required
                  />
                  <label htmlFor="terms" className="text-gray-400">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-pink-400 hover:text-pink-300 transition-colors"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-pink-400 hover:text-pink-300 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 hover:from-pink-600 hover:via-rose-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-pink-500/30 transition-all duration-200"
                >
                  Create Account
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-800" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#1a1a1a] text-gray-500">
                    Or sign up with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="bg-[#0a0a0a] border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="bg-[#0a0a0a] border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </Button>
              </div>

              <p className="text-center text-sm text-gray-400">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-pink-400 hover:text-pink-300 font-semibold transition-colors"
                >
                  Sign in
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      

      {/* // Side View of Image Showing ....  */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/20 via-rose-500/10 to-orange-500/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
          <div className="space-y-8 max-w-md">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 shadow-lg shadow-pink-500/50">
                <Sparkles className="w-8 h-8" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent">
                Join Our Community
              </h1>
              <p className="text-xl text-gray-400">
                Create an account and unlock amazing features
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-pink-500 mt-2" />
                <div>
                  <h3 className="font-semibold text-lg">Free Forever</h3>
                  <p className="text-gray-400">
                    Start with our free plan and upgrade anytime
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-rose-500 mt-2" />
                <div>
                  <h3 className="font-semibold text-lg">Easy Setup</h3>
                  <p className="text-gray-400">
                    Get started in less than 2 minutes
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                <div>
                  <h3 className="font-semibold text-lg">Premium Features</h3>
                  <p className="text-gray-400">
                    Access powerful tools to boost your productivity
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
                <div className="h-1 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full" />
                <div className="h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-white">10K+</div>
                  <div className="text-sm text-gray-400">Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>
    </div>
  );
};

export default Signup;
