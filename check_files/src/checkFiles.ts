import * as core from '@actions/core';
import * as github from '@actions/github';
import * as fs from 'fs';
import * as path from 'path';

async function run() {
  try {
    // Definindo o diretório base como dois níveis acima do diretório atual
    const baseDir = path.resolve(__dirname, '../../');

    const requiredFiles = ['Dockerfile', 'fly.toml'].map(file => path.join(baseDir, file));

    requiredFiles.forEach(file => {
      if (!fs.existsSync(file)) {
        throw new Error(`Required file not found: ${file}`);
      }
    });

    console.log("All required files are present.");
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message); // Acesso seguro à propriedade message.
    } else {
      core.setFailed("An unknown error occurred."); // Tratamento para tipos de erro desconhecidos.
    }
  }
}

run();
