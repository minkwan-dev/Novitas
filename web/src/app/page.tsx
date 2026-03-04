export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col gap-6">
        <h1 className="text-4xl font-bold tracking-tighter">
          Novitas Web3 Test
        </h1>

        <appkit-button />

        <div className="flex flex-col items-center gap-2 text-gray-500">
          <p>1. 버튼이 정상적으로 보이는지 확인</p>
          <p>2. 클릭 시 지갑 선택 모달이 뜨는지 확인</p>
        </div>
      </div>
    </main>
  );
}
