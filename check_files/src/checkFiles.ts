import * as core from '@actions/core';
import * as github from '@actions/github';
import * as fs from 'fs';

async function run() {
  try {
    const requiredFiles = ['Dockerfile', 'fly.toml'];

    requiredFiles.forEach(file => {
      if (!fs.existsSync(file)) {
        throw new Error(`Required file not found: ${file}`);
      }
    });

    console.log("All required files are present.");
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
