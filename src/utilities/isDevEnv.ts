const isDevEnv = () => {
    return process && process.env.NODE_ENV === "development";
}

export default isDevEnv;