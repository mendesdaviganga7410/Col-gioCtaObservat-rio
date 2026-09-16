import { defineConfig } from 'vitest/config';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Eixos (Telas de Seleção)
        eixo1: resolve(__dirname, 'pages/eixo1.html'),
        eixo2: resolve(__dirname, 'pages/eixo2.html'),
        eixo3: resolve(__dirname, 'pages/eixo3.html'),
        eixo4: resolve(__dirname, 'pages/eixo4.html'),
        eixo5: resolve(__dirname, 'pages/eixo5.html'),
        // Tópicos (Grids de Conteúdo)
        eixo1_topico1: resolve(__dirname, 'pages/eixo1-mapeamento-agroindustrial.html'),
        eixo1_topico2: resolve(__dirname, 'pages/eixo1-profissoes-em-alta.html'),
        eixo2_topico1: resolve(__dirname, 'pages/eixo2-cesta-basica.html'),
        eixo2_topico2: resolve(__dirname, 'pages/eixo2-poder-de-compra.html'),
        eixo3_topico1: resolve(__dirname, 'pages/eixo3-primeiro-emprego.html'),
        eixo3_topico2: resolve(__dirname, 'pages/eixo3-mulheres-agro-ti.html'),
        eixo4_topico1: resolve(__dirname, 'pages/eixo4-agro-40-profissional-hibrido.html'),
        eixo4_topico2: resolve(__dirname, 'pages/eixo4-matematica-aplicada.html'),
        eixo5_topico1: resolve(__dirname, 'pages/eixo5-guia-campus-ingressos.html'),
        eixo5_topico2: resolve(__dirname, 'pages/eixo5-trajetoria-egressos.html'),
      }
    }
  },
  test: {
    environment: 'jsdom',
    typecheck: {
      tsconfig: './tsconfig.test.json',
    },
  }
});
