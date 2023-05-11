import VpnController from './controllers/vpn';

async function main() {
    await VpnController.beta({ set: () => { } } as any);
    console.log('end');
}
main()
