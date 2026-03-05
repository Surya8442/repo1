FROM nginx:latest

WORKDIR /usr/share/nginx/html

RUN apt-get update && apt-get install -y curl

COPY src/html/ .
COPY src/css/ css/
COPY src/js/ js/

ADD src/html/index.html backup_index.html

RUN useradd -m appuser
USER appuser

EXPOSE 4000

CMD ["nginx", "-g", "daemon off;"]
