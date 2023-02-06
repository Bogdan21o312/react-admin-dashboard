# Start server

start-dev:
	docker-compose start
stop-dev:
	docker-compose stop

# Storybook

start-sb:
	npm run storybook

build-sb:
	npm run build-storybook
