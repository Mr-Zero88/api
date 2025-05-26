declare module "trinitycore-srp6" {
    type defaultParams = {
        N_length_bits: 256,
        N: BigInt,
        g: BigInt,
        hash: `sha1`,
        identityMaxLength: 16,
        passwordMaxLength: 16
    };
    export const params: {
        trinitycore: defaultParams,
        azerothcore: defaultParams
    };
    export function computeVerifier(params: defaultParams, salt: Buffer, identity: string, password: string): any;
}