import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import EmployeeManager from "./components/EmployeeManager";

function App() {
  return (
    <>
      <header className="p-4 flex justify-between items-center border-b shadow-md">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      <SignedIn>
        <main className="p-4 max-w-7xl mx-auto">
          <EmployeeManager />
        </main>
      </SignedIn>
    </>
  );
}

export default App;
