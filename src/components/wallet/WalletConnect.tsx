import { Button } from "@chakra-ui/react";
import { useEffect } from "react";

import { useStarknet } from "context";

// Wallet connect button component
const WalletConnect = () => {
  // get current account & function from Starknet Manager
  const { account, connected, setConnected, connectBrowserWallet } =
    useStarknet();

  // Called each time account or connection status change
  useEffect(() => {
    if (account && account.address.length > 0) {
      setConnected(true);
    }
  }, [account, setConnected, connected]);

  // UI part, you don't need to touch it (but you can if you want to improve :D)
  // If not connected -> show connect button, else show formatted address
  return !connected ? (
    <Button
      ml="4"
      textDecoration="none !important"
      outline="none !important"
      boxShadow="none !important"
      onClick={() => {
        // When user click on button -> call connectBrowserWallet (see above)
        connectBrowserWallet();
      }}
    >
      Connect Wallet
    </Button>
  ) : (
    <Button
      ml="4"
      textDecoration="none !important"
      outline="none !important"
      boxShadow="none !important"
      onClick={() => {
        setConnected(false);
      }}
    >
      {account
        ? `${account.address.substring(0, 4)}...${account.address.substring(
            account.address.length - 4
          )}`
        : "No Account"}
    </Button>
  );
};

export default WalletConnect;
