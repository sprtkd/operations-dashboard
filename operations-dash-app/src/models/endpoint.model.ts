import { getRandString, getRandNum } from './utility.model';

export class EndpointModel {
    name: string;
    versions: EndpointVersionModel[];
    profiling: ProfilingModel;

    static dummyModelListFactory(numOfEndpoints: number, maxVersions: number): EndpointModel[] {
        const baseDummyApi: string = "https://reqres.in/api/users/";
        const MAX_USERS = 12;
        if (numOfEndpoints * maxVersions > MAX_USERS) {
            throw "User Count Overflow: " + (numOfEndpoints * maxVersions);
        }
        var endpointModel: EndpointModel;
        var endpointModelList: EndpointModel[] = [];
        let userIndex = 1;
        for (let iter of Array(numOfEndpoints).keys()) {
            endpointModel = new EndpointModel();
            endpointModel.name = "backendService_" + getRandString(5);
            endpointModel.versions = [];
            let currVers = getRandNum(maxVersions);
            for (let iter2 of Array(currVers).keys()) {
                let endpointVersionModel: EndpointVersionModel = new EndpointVersionModel();
                endpointVersionModel.versionName = "v" + (iter2 + 1);
                endpointVersionModel.url = baseDummyApi + userIndex + "?delay=" + (getRandNum(3) - 1);
                endpointVersionModel.lastHit = null;
                endpointVersionModel.isActive = false;
                endpointVersionModel.hitHistory = [];
                endpointModel.versions.push(endpointVersionModel);
            }
            endpointModel.profiling = new ProfilingModel();
            endpointModel.profiling.lastDailyUptimePercentage = 0;
            endpointModel.profiling.upTimePercentageHistory = [];
            endpointModel.profiling.uptime = 0;

            endpointModelList.push(endpointModel);
        }

        return endpointModelList;
    }

}

export class EndpointVersionModel {
    versionName: string;
    url: string;
    isActive: boolean;
    lastHit: EndpointStatsModel;
    hitHistory: EndpointStatsModel[]
}

export class EndpointStatsModel {
    hitTime: Date;
    rtt: number; //milli
}

export class ProfilingModel {
    uptime: number; //sec
    lastDailyUptimePercentage: number;
    upTimePercentageHistory: number[];
}

