"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useCallback, useEffect } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();

  // Check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Memoize the toggle function to prevent unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Close menu when clicking a link (for mobile)
  const handleLinkClick = useCallback(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  // Handle logout
  const handleLogout = useCallback(async () => {
    try {
      await signOut(auth);
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account",
      });
      router.push("/");
    } catch (error: any) {
      toast({
        title: "Logout failed",
        description: error.message || "An error occurred during logout",
        variant: "destructive",
      });
    }
  }, [router, toast]);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-40">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center" onClick={handleLinkClick}>
          <span className="text-xl font-bold text-teal-600">GoGetWell.ai</span>
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <Link
            href="/features"
            className={`text-sm font-medium hover:underline ${
              pathname === "/features" ? "text-teal-600" : ""
            }`}
            prefetch={true}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className={`text-sm font-medium hover:underline ${
              pathname === "/pricing" ? "text-teal-600" : ""
            }`}
            prefetch={true}
          >
            Pricing
          </Link>
          <Link
            href="/resources"
            className={`text-sm font-medium hover:underline ${
              pathname === "/resources" ? "text-teal-600" : ""
            }`}
            prefetch={true}
          >
            Resources
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium hover:underline ${
              pathname === "/about" ? "text-teal-600" : ""
            }`}
            prefetch={true}
          >
            About
          </Link>
        </nav>
        <div className="ml-auto md:ml-4 flex gap-2">
          {!loading && (
            <>
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={handleLinkClick}
                    prefetch={true}
                  >
                    <Button variant="outline" className="hidden md:flex">
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    className="hidden md:flex items-center gap-2"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={handleLinkClick} prefetch={true}>
                    <Button variant="outline" className="hidden md:flex">
                      Log In
                    </Button>
                  </Link>
                  <Link
                    href="/signup"
                    onClick={handleLinkClick}
                    prefetch={true}
                  >
                    <Button className="hidden md:flex bg-teal-600 hover:bg-teal-700">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link
              href="/features"
              className={`text-sm font-medium hover:underline ${
                pathname === "/features" ? "text-teal-600" : ""
              }`}
              onClick={handleLinkClick}
              prefetch={true}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className={`text-sm font-medium hover:underline ${
                pathname === "/pricing" ? "text-teal-600" : ""
              }`}
              onClick={handleLinkClick}
              prefetch={true}
            >
              Pricing
            </Link>
            <Link
              href="/resources"
              className={`text-sm font-medium hover:underline ${
                pathname === "/resources" ? "text-teal-600" : ""
              }`}
              onClick={handleLinkClick}
              prefetch={true}
            >
              Resources
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium hover:underline ${
                pathname === "/about" ? "text-teal-600" : ""
              }`}
              onClick={handleLinkClick}
              prefetch={true}
            >
              About
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={handleLinkClick}
                    prefetch={true}
                  >
                    <Button variant="outline" className="w-full">
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    className="w-full bg-teal-600 hover:bg-teal-700 flex items-center justify-center gap-2"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={handleLinkClick} prefetch={true}>
                    <Button variant="outline" className="w-full">
                      Log In
                    </Button>
                  </Link>
                  <Link
                    href="/signup"
                    onClick={handleLinkClick}
                    prefetch={true}
                  >
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
