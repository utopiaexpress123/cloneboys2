import { Button } from "@/components/ui/button";
import Messages from "./messages";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Login() {
  return (
    <div className="flex-1 flex flex-col w-full py-12 sm:max-w-md justify-center gap-2">


<Tabs defaultValue="account" className="w-[400px] transition-all">
  <TabsList className="w-full bg-transparent">
    <TabsTrigger value="account" className="text-start shadow-lg">Male Version</TabsTrigger>
    <Link href="https://clonegirls.utopia.express/login/" className="text-sm text-gray-500 ml-4">
      <p>Go to Female Version</p>
      </Link>
  </TabsList>
  <TabsContent value="account" >
      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 rounded-full shadow-xl"
        action="/auth/sign-in"
        method="post"
      >
        <Card className="border-0 shadow-2xl rounded-2xl">
          <CardHeader>
            <CardTitle>Log In / Sign Up</CardTitle>
            <CardDescription>
              Log into your account or sign up for a new one to get started.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Label className="text-md" htmlFor="email">
              Email
            </Label>
            <input
              className="rounded-full px-4 py-2 bg-inherit border"
              name="email"
              placeholder="you@example.com"
              required
            />
            <Button className="shadow-lg h-10 animate-pulse hover:animate-none">Continue</Button>
            <Messages />
<div id="g_id_onload"
     data-client_id="99369908865-hidv914ul8crlamvps2ssjgi8j6dgrvb.apps.googleusercontent.com"
     data-context="signin"
     data-ux_mode="popup"
     data-login_uri="https://clone.utopia.express/login"
     data-auto_select="true"
     data-itp_support="true">
</div>

<div className="g_id_signin"
     data-type="standard"
     data-shape="pill"
     data-theme="outline"
     data-text="signin_with"
     data-size="large"
     data-logo_alignment="left">
</div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-gray-400">
              By signing up, you agree to our{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </CardFooter>
        </Card>
      </form>
  </TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>

    </div>
  );
}




