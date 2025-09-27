import { getCookie, hasCookie, setCookie } from "cookies-next"

export const getCookiesCart = (): { [id: string]: number } => {
    if (hasCookie('cart')) {
        const cookieCart = JSON.parse(getCookie('cart') as string ?? '{}')

        return cookieCart
    }

    return {}
}

export const addProductToCart = async (id: string) => {
    const cookieCart = getCookiesCart()

    if (cookieCart[id]) {
        cookieCart[id] += 1
    } else {
        cookieCart[id] = 1
    }

    setCookie('cart', JSON.stringify(cookieCart))
}


export const removeProductFromCart = async (id: string) => {
    const cookieCart = getCookiesCart()

    if (cookieCart[id]) {
        delete cookieCart[id];
    }
    setCookie('cart', JSON.stringify(cookieCart))
}

export const removeSingleItemFromCart = async (id: string) => {
    const cookieCart = getCookiesCart()
    if (!cookieCart[id]) return;

    cookieCart[id] -= 1;
    if (cookieCart[id] === 0) {
        delete cookieCart[id];
    }
    setCookie('cart', JSON.stringify(cookieCart))
}