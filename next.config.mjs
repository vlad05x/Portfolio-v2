let userConfig = undefined;

try {
  // Попытка динамически загрузить конфигурацию пользователя
  userConfig = await import('./v0-user-next.config');
} catch (e) {
  // Ошибка игнорируется, если конфигурация не существует
  console.warn('User config could not be loaded, using default config');
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// Слияние основной конфигурации с пользовательской, если она существует
mergeConfig(nextConfig, userConfig);

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return; // Если пользовательская конфигурация не найдена, выходим
  }

  // Обход всех ключей в пользовательской конфигурации
  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key]) &&
      nextConfig[key] !== null
    ) {
      // Если значение - объект, выполняем глубокое слияние
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      // В противном случае заменяем значение на значение из userConfig
      nextConfig[key] = userConfig[key];
    }
  }
}

export default nextConfig;
