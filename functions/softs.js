export default {
    async fetch(request, env) {
        let url = new URL(request.url);
        url.hostname = 'hakurei-reimu.run.goorm.io'
        url.pathname = '/softs/'
        let new_request = new Request(url);
        return fetch(new_request);
    },
};  