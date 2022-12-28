make-docker:
	npm run build
	docker build -t devio .

start-docker:
	docker run --name local-devio -d -p 8080:80 devio