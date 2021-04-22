FROM node:lts-alpine AS build
WORKDIR /app
# Copy all local files to the /app (Work directory)
COPY . .

LABEL Author William Zink

# Update and install all dependencies
RUN apk update && apk upgrade
#RUN apk add git
# install app depependencies
RUN npm install

# build necessary, even if no static files are needed
RUN npm run build

FROM nginx:stable-alpine AS production-web
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]