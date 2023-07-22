/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'thebatuhansnetwork.xyz',
                port: '',
                pathname: '/assets/img/avatar.jpg',
            },
            {
                protocol: "https",
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/D3Ext/aesthetic-wallpapers/main/images/void-black-4k.png',
            },
            {
                protocol: "https",
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/D3Ext/aesthetic-wallpapers/main/images/nix.png',
            },
            {
                protocol: "https",
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/D3Ext/aesthetic-wallpapers/main/images/various-os-3-4k.png',
            },
        ]
    }
}

module.exports = nextConfig
