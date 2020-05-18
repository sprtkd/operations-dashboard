import { getRandString, getRandNum } from './utility.model';

export class EndpointModel {
    name: string;
    versions: EndpointVersionModel[];
    profiling: ProfilingModel;
    details: EndpointDetailsModel;

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
                endpointVersionModel.lastHitDetails = null;
                endpointVersionModel.isActive = false;
                endpointVersionModel.hitHistory = [];
                endpointModel.versions.push(endpointVersionModel);
                userIndex += 1;
            }

            endpointModel.details = new EndpointDetailsModel();
            endpointModel.details.atleastOneActive = false;
            endpointModel.details.bestUrl = "";
            endpointModel.details.lastHitBestDetails = new EndpointStatsModel();
            endpointModel.details.lastHitBestDetails.hitTime = new Date();
            endpointModel.details.lastHitBestDetails.rtt = 9999;
            endpointModel.details.totalVersions = endpointModel.versions.length;
            endpointModel.details.activeVersions = 0;
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
    lastHitDetails: EndpointStatsModel;
    hitHistory: EndpointStatsModel[]
}

export class EndpointDetailsModel {
    totalVersions: number;
    activeVersions: number;
    bestUrl: string;
    atleastOneActive: boolean;
    lastHitBestDetails: EndpointStatsModel;
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

