"use client";

import { ReactNode } from "react";
import { wagmiAdapter, projectId, networks } from "@/config";
import { createAppKit } from "@reown/appkit/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { type AppKitNetwork } from "@reown/appkit/networks";

const queryClient = new QueryClient();

if (!projectId) throw new Error("Project ID is not defined");

createAppKit({
  adapters: [wagmiAdapter],

  networks: networks as unknown as [AppKitNetwork, ...AppKitNetwork[]],
  projectId,
  features: {
    analytics: true,
  },
});

export default function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
