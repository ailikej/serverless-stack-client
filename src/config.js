const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY:
        'pk_test_51IY1UaJ45jZaf7NV3mcfD9dypZDYdRoi2UwNZIShqv14rhZPvjjxmWOihqozHE11jgZI8LXXt3PnLWuhauASC88000VuoGIS4Z',
    s3: {
        REGION: 'us-east-1',
        BUCKET: 'notes-app-filestorage',
    },
    apiGateway: {
        REGION: 'us-east-1',
        URL: 'https://uqcwl4ewlb.execute-api.us-east-1.amazonaws.com/prod',
    },
    cognito: {
        REGION: 'us-east-1',
        USER_POOL_ID: 'us-east-1_TgjAZlF6i',
        APP_CLIENT_ID: '1n17j26ihpb7sg2kkuk1kpdo2l',
        IDENTITY_POOL_ID: 'us-east-1:a4a30242-9d5e-4e66-8220-c6826b19c86f',
    },
};

export default config;
