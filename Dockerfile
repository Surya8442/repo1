FROM nginx:latest
COPY src/html /usr/share/nginx/html
COPY src/css /usr/share/nginx/html/css
COPY src/js /usr/share/nginx/html/js
EXPOSE 4000
CMD ["nginx","-g","daemon off;"]
