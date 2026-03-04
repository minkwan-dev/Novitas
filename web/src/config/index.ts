import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, arbitrum, sepolia } from "@reown/appkit/networks";
import { cookieStorage, createStorage } from "wagmi";

// Reown Cloud에서 발급받은 프로젝트 식별 키
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error("Project ID is not defined. .env.local 파일을 확인하세요.");
}

// 지갑 연결 UI에 노출할 블록체인 네트워크 목록
export const networks = [mainnet, arbitrum, sepolia];

// SSR 호환 + 쿠키 기반 세션 유지가 적용된 Wagmi ↔ AppKit 연결 어댑터
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

// WagmiProvider에 주입할 최종 설정 객체
export const config = wagmiAdapter.wagmiConfig;
