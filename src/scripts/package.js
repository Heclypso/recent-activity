const endpoint = ''

export const chamarApi = async () => {
    const resp = await fetch(endpoint)

    if (resp.status === 200) {
        const obj = await resp.json()
        console.log(obj)
    }
}