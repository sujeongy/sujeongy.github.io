import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
});

// Export the final Next.js config with Nextra included
export default withNextra({
  // ▼ 1. 정적 사이트로 내보내기 (이거 없으면 에러 남)
  output: "export",

  // ▼ 2. 이미지 최적화 끄기 (GitHub Pages는 이미지 처리 서버가 없음)
  images: {
    unoptimized: true,
  },
});
