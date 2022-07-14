export async function onRequestGet({ params }) {
    console.log(params)
    return fetch(`http://hakurei-reimu.run.goorm.io/softs/`);
}