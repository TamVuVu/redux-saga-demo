import { ACCESS_TOKEN } from "../constants";

export const logOut = () => {
    window.localStorage.removeItem("ACCESS_TOKEN")
    window.history.pushState()
}