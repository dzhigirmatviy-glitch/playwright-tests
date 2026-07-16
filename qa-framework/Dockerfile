FROM mcr.microsoft.com/playwright:v1.48.0-jammy
WORKDIR /app
COPY . .
RUN npm init -y && npm install @playwright/test
RUN npx playwright install --with-deps
CMD ["npx", "playwright", "test"]