import {SpraypaintBase} from "spraypaint-react-native";

const ApplicationRecord = SpraypaintBase.extend({
    static: {
        baseUrl: process.env.API,
        apiNamespace: "/v1"
    }
});

// ApplicationRecord.middlewareStack = middleware;
ApplicationRecord.sync = true;

export { ApplicationRecord };