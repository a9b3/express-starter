const env = process.env.NODE_ENV

const config = {}

config.default = {
  port: 8080,
}

config.dev = {

}

config.test = {

}

config.prod = {

}

export default Object.assign({}, config.default, config[env])
