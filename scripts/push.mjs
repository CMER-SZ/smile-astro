import { execSync } from 'child_process';

const target = (process.argv[2] || '').toLowerCase();

if (target === 'cf' || target === 'cloudflare') {
  console.log('🚀 [Cloudflare Pages] 正在進行 Astro 構建與部署 (2026smile)...');
  execSync('pnpm build', { stdio: 'inherit' });
  execSync('wrangler pages deploy dist --project-name 2026smile --branch main --commit-dirty=true', { stdio: 'inherit' });
  console.log('\n✨ [Cloudflare Pages] 部署成功！線上地址: https://2026smile.pages.dev');
} else {
  console.log('💡 使用方法:');
  console.log('  pnpm push cf       # 構建並推送至 Cloudflare Pages');
  console.log('  pnpm push:cf       # 快捷指令構建並推送至 Cloudflare Pages');
  console.log('  pnpm deploy:cf     # 快捷發布指令');
}
