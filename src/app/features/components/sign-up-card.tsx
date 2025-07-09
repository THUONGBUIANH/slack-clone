import React from "react";
import { SignInFlow } from "../types";

 interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export default function SignUpCard({setState}: SignUpCardProps) {
  return <div onClick={() => setState('signIn')}>SignUpCard</div>;
}
