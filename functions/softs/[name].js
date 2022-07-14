export async function onRequestGet({ params }) {
    return fetch(`http://hakurei-reimu.run.goorm.io/softs/${params.name}`);
}