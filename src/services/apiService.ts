
export const apiFetch = (
    url: string,
    request: Request | any = {}
) =>
    fetch(`${process.env.REACT_APP_API}${url}`, {
        method: 'GET',
        ...request,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    }).then(response => response.json())