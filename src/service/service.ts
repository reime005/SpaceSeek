/** Generate by swagger-axios-codegen */
// tslint:disable
/* eslint-disable */
import axiosStatic, { AxiosInstance } from 'axios';

export interface IRequestOptions {
  headers?: any;
  baseURL?: string;
  responseType?: string;
}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(
  configs: IRequestConfig,
  resolve: (p: any) => void,
  reject: (p: any) => void,
): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(
  method: string,
  contentType: string,
  url: string,
  options: any,
): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType,
  };
  return configs;
}

const basePath = 'https://ll.thespacedevs.com/2.0.0';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
export interface JsonResult<T> {
  code: number;
  data: T;
  message: string;
  success: boolean;
}

export class AgenciesService {
  /**
   *
   */
  static agenciesList(
    params: {
      /**  */
      featured?: string;
      /**  */
      agencyType?: string;
      /**  */
      countryCode?: string;
      /** A search term. */
      search?: string;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/agencies/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        featured: params['featured'],
        agency_type: params['agencyType'],
        country_code: params['countryCode'],
        search: params['search'],
        ordering: params['ordering'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static agenciesRead(
    id: string,
    options: IRequestOptions = {},
  ): Promise<AgencySerializerDetailed> {
    return new Promise((resolve, reject) => {
      let url = basePath + `/agencies/${id}/`;

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class AstronautService {
  /**
   *
   */
  static astronautList(
    params: {
      /**  */
      name?: string;
      /**  */
      dateOfBirth?: string;
      /**  */
      agencyName?: string;
      /**  */
      status?: string;
      /**  */
      dateOfDeath?: string;
      /**  */
      agencyAbbrev?: string;
      /**  */
      nationality?: string;
      /**  */
      dateOfBirthGt?: string;
      /**  */
      dateOfBirthLt?: string;
      /**  */
      dateOfBirthGte?: string;
      /**  */
      dateOfBirthLte?: string;
      /**  */
      dateOfDeathGt?: string;
      /**  */
      dateOfDeathLt?: string;
      /**  */
      dateOfDeathGte?: string;
      /**  */
      dateOfDeathLte?: string;
      /** A search term. */
      search?: string;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/astronaut/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        name: params['name'],
        date_of_birth: params['dateOfBirth'],
        agency__name: params['agencyName'],
        status: params['status'],
        date_of_death: params['dateOfDeath'],
        agency__abbrev: params['agencyAbbrev'],
        nationality: params['nationality'],
        date_of_birth__gt: params['dateOfBirthGt'],
        date_of_birth__lt: params['dateOfBirthLt'],
        date_of_birth__gte: params['dateOfBirthGte'],
        date_of_birth__lte: params['dateOfBirthLte'],
        date_of_death__gt: params['dateOfDeathGt'],
        date_of_death__lt: params['dateOfDeathLt'],
        date_of_death__gte: params['dateOfDeathGte'],
        date_of_death__lte: params['dateOfDeathLte'],
        search: params['search'],
        ordering: params['ordering'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static astronautRead(
    options: IRequestOptions = {},
  ): Promise<AstronautDetailed> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/astronaut/{id}/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class ConfigService {
  /**
   *
   */
  static configLauncherList(
    params: {
      /**  */
      family?: string;
      /**  */
      name?: string;
      /**  */
      manufacturer?: string;
      /**  */
      fullName?: string;
      /**  */
      active?: string;
      /**  */
      reusable?: string;
      /**  */
      program?: string;
      /** A search term. */
      search?: string;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/config/launcher/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        family: params['family'],
        name: params['name'],
        manufacturer: params['manufacturer'],
        full_name: params['fullName'],
        active: params['active'],
        reusable: params['reusable'],
        program: params['program'],
        search: params['search'],
        ordering: params['ordering'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static configLauncherRead(
    options: IRequestOptions = {},
  ): Promise<LauncherConfigDetail> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/config/launcher/{id}/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static configSpacecraftList(
    params: {
      /**  */
      name?: string;
      /**  */
      manufacturer?: string;
      /**  */
      inUse?: string;
      /**  */
      humanRated?: string;
      /** A search term. */
      search?: string;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/config/spacecraft/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        name: params['name'],
        manufacturer: params['manufacturer'],
        in_use: params['inUse'],
        human_rated: params['humanRated'],
        search: params['search'],
        ordering: params['ordering'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static configSpacecraftRead(
    options: IRequestOptions = {},
  ): Promise<SpacecraftConfigurationDetail> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/config/spacecraft/{id}/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class DashboardService {
  /**
   *
   */
  static dashboardStarshipList(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dashboard/starship/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class DockingEventService {
  /**
   *
   */
  static dockingEventList(
    params: {
      /**  */
      spaceStationId?: number;
      /**  */
      dockingLocationId?: number;
      /**  */
      flightVehicleId?: number;
      /**  */
      dockingGt?: string;
      /**  */
      dockingLt?: string;
      /**  */
      dockingGte?: string;
      /**  */
      dockingLte?: string;
      /** A search term. */
      search?: string;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/docking_event/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        space_station__id: params['spaceStationId'],
        docking_location__id: params['dockingLocationId'],
        flight_vehicle__id: params['flightVehicleId'],
        docking__gt: params['dockingGt'],
        docking__lt: params['dockingLt'],
        docking__gte: params['dockingGte'],
        docking__lte: params['dockingLte'],
        search: params['search'],
        ordering: params['ordering'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static dockingEventRead(
    options: IRequestOptions = {},
  ): Promise<DockingEventDetailed> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/docking_event/{id}/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class EventService {
  /**
   *
   */
  static eventList(
    params: {
      /**  */
      slug?: string;
      /**  */
      id?: number;
      /**  */
      type?: string;
      /**  */
      program?: string;
      /** A search term. */
      search?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/event/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        slug: params['slug'],
        id: params['id'],
        type: params['type'],
        program: params['program'],
        search: params['search'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static eventPreviousList(
    params: {
      /**  */
      type?: string;
      /**  */
      program?: string;
      /** A search term. */
      search?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/event/previous/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        type: params['type'],
        program: params['program'],
        search: params['search'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static eventPreviousRead(options: IRequestOptions = {}): Promise<Events> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/event/previous/{id}/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static eventUpcomingList(
    params: {
      /**  */
      type?: string;
      /**  */
      program?: string;
      /** A search term. */
      search?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/event/upcoming/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        type: params['type'],
        program: params['program'],
        search: params['search'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static eventUpcomingRead(options: IRequestOptions = {}): Promise<Events> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/event/upcoming/{id}/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static eventRead(options: IRequestOptions = {}): Promise<Events> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/event/{id}/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class ExpeditionService {
  /**
   *
   */
  static expeditionList(
    params: {
      /**  */
      name?: string;
      /**  */
      crewAstronautAgency?: string;
      /**  */
      spaceStation?: string;
      /**  */
      crewAstronaut?: string;
      /**  */
      startGt?: string;
      /**  */
      startLt?: string;
      /**  */
      startGte?: string;
      /**  */
      startLte?: string;
      /**  */
      endGt?: string;
      /**  */
      endLt?: string;
      /**  */
      endGte?: string;
      /**  */
      endLte?: string;
      /** A search term. */
      search?: string;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/expedition/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        name: params['name'],
        crew__astronaut__agency: params['crewAstronautAgency'],
        space_station: params['spaceStation'],
        crew__astronaut: params['crewAstronaut'],
        start__gt: params['startGt'],
        start__lt: params['startLt'],
        start__gte: params['startGte'],
        start__lte: params['startLte'],
        end__gt: params['endGt'],
        end__lt: params['endLt'],
        end__gte: params['endGte'],
        end__lte: params['endLte'],
        search: params['search'],
        ordering: params['ordering'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static expeditionRead(
    options: IRequestOptions = {},
  ): Promise<ExpeditionDetail> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/expedition/{id}/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class LaunchService {
  /**
   * API endpoint that returns all Launch objects or a single launch.
   */
  static launchList(
    params: {
      /**  */
      name?: string;
      /**  */
      slug?: string;
      /**  */
      rocketConfigurationName?: string;
      /**  */
      rocketConfigurationId?: number;
      /**  */
      status?: string;
      /**  */
      launchLibraryId?: number;
      /**  */
      rocketSpacecraftflightSpacecraftName?: string;
      /**  */
      rocketSpacecraftflightSpacecraftNameIcontains?: string;
      /**  */
      rocketSpacecraftflightSpacecraftId?: number;
      /**  */
      rocketConfigurationManufacturerName?: string;
      /**  */
      rocketConfigurationManufacturerNameIcontains?: string;
      /**  */
      rocketConfigurationFullName?: string;
      /**  */
      rocketConfigurationFullNameIcontains?: string;
      /**  */
      missionOrbitName?: string;
      /**  */
      missionOrbitNameIcontains?: string;
      /**  */
      netGt?: string;
      /**  */
      netLt?: string;
      /**  */
      netGte?: string;
      /**  */
      netLte?: string;
      /** A search term. */
      search?: string;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/launch/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        name: params['name'],
        slug: params['slug'],
        rocket__configuration__name: params['rocketConfigurationName'],
        rocket__configuration__id: params['rocketConfigurationId'],
        status: params['status'],
        launch_library_id: params['launchLibraryId'],
        rocket__spacecraftflight__spacecraft__name:
          params['rocketSpacecraftflightSpacecraftName'],
        rocket__spacecraftflight__spacecraft__name__icontains:
          params['rocketSpacecraftflightSpacecraftNameIcontains'],
        rocket__spacecraftflight__spacecraft__id:
          params['rocketSpacecraftflightSpacecraftId'],
        rocket__configuration__manufacturer__name:
          params['rocketConfigurationManufacturerName'],
        rocket__configuration__manufacturer__name__icontains:
          params['rocketConfigurationManufacturerNameIcontains'],
        rocket__configuration__full_name: params['rocketConfigurationFullName'],
        rocket__configuration__full_name__icontains:
          params['rocketConfigurationFullNameIcontains'],
        mission__orbit__name: params['missionOrbitName'],
        mission__orbit__name__icontains: params['missionOrbitNameIcontains'],
        net__gt: params['netGt'],
        net__lt: params['netLt'],
        net__gte: params['netGte'],
        net__lte: params['netLte'],
        search: params['search'],
        ordering: params['ordering'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static launchPreviousList(
    params: {
      /**  */
      name?: string;
      /**  */
      slug?: string;
      /**  */
      rocketConfigurationName?: string;
      /**  */
      rocketConfigurationId?: number;
      /**  */
      status?: string;
      /**  */
      launchLibraryId?: number;
      /**  */
      rocketSpacecraftflightSpacecraftName?: string;
      /**  */
      rocketSpacecraftflightSpacecraftNameIcontains?: string;
      /**  */
      rocketSpacecraftflightSpacecraftId?: number;
      /**  */
      rocketConfigurationManufacturerName?: string;
      /**  */
      rocketConfigurationManufacturerNameIcontains?: string;
      /**  */
      rocketConfigurationFullName?: string;
      /**  */
      rocketConfigurationFullNameIcontains?: string;
      /**  */
      missionOrbitName?: string;
      /**  */
      missionOrbitNameIcontains?: string;
      /**  */
      program?: string;
      /** A search term. */
      search?: string;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/launch/previous/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        name: params['name'],
        slug: params['slug'],
        rocket__configuration__name: params['rocketConfigurationName'],
        rocket__configuration__id: params['rocketConfigurationId'],
        status: params['status'],
        launch_library_id: params['launchLibraryId'],
        rocket__spacecraftflight__spacecraft__name:
          params['rocketSpacecraftflightSpacecraftName'],
        rocket__spacecraftflight__spacecraft__name__icontains:
          params['rocketSpacecraftflightSpacecraftNameIcontains'],
        rocket__spacecraftflight__spacecraft__id:
          params['rocketSpacecraftflightSpacecraftId'],
        rocket__configuration__manufacturer__name:
          params['rocketConfigurationManufacturerName'],
        rocket__configuration__manufacturer__name__icontains:
          params['rocketConfigurationManufacturerNameIcontains'],
        rocket__configuration__full_name: params['rocketConfigurationFullName'],
        rocket__configuration__full_name__icontains:
          params['rocketConfigurationFullNameIcontains'],
        mission__orbit__name: params['missionOrbitName'],
        mission__orbit__name__icontains: params['missionOrbitNameIcontains'],
        program: params['program'],
        search: params['search'],
        ordering: params['ordering'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static launchPreviousRead(
    options: IRequestOptions = {},
  ): Promise<LaunchDetailed> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/launch/previous/{id}/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static launchUpcomingList(
    params: {
      /**  */
      name?: string;
      /**  */
      slug?: string;
      /**  */
      rocketConfigurationName?: string;
      /**  */
      rocketConfigurationId?: number;
      /**  */
      status?: string;
      /**  */
      launchLibraryId?: number;
      /**  */
      rocketSpacecraftflightSpacecraftName?: string;
      /**  */
      rocketSpacecraftflightSpacecraftNameIcontains?: string;
      /**  */
      rocketSpacecraftflightSpacecraftId?: number;
      /**  */
      rocketConfigurationManufacturerName?: string;
      /**  */
      rocketConfigurationManufacturerNameIcontains?: string;
      /**  */
      rocketConfigurationFullName?: string;
      /**  */
      rocketConfigurationFullNameIcontains?: string;
      /**  */
      missionOrbitName?: string;
      /**  */
      missionOrbitNameIcontains?: string;
      /**  */
      program?: string;
      /** A search term. */
      search?: string;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/launch/upcoming/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        name: params['name'],
        slug: params['slug'],
        rocket__configuration__name: params['rocketConfigurationName'],
        rocket__configuration__id: params['rocketConfigurationId'],
        status: params['status'],
        launch_library_id: params['launchLibraryId'],
        rocket__spacecraftflight__spacecraft__name:
          params['rocketSpacecraftflightSpacecraftName'],
        rocket__spacecraftflight__spacecraft__name__icontains:
          params['rocketSpacecraftflightSpacecraftNameIcontains'],
        rocket__spacecraftflight__spacecraft__id:
          params['rocketSpacecraftflightSpacecraftId'],
        rocket__configuration__manufacturer__name:
          params['rocketConfigurationManufacturerName'],
        rocket__configuration__manufacturer__name__icontains:
          params['rocketConfigurationManufacturerNameIcontains'],
        rocket__configuration__full_name: params['rocketConfigurationFullName'],
        rocket__configuration__full_name__icontains:
          params['rocketConfigurationFullNameIcontains'],
        mission__orbit__name: params['missionOrbitName'],
        mission__orbit__name__icontains: params['missionOrbitNameIcontains'],
        program: params['program'],
        search: params['search'],
        ordering: params['ordering'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static launchUpcomingRead(
    options: IRequestOptions = {},
  ): Promise<LaunchDetailed> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/launch/upcoming/{id}/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * API endpoint that returns all Launch objects or a single launch.
   */
  static launchRead(id: string, options: IRequestOptions = {}): Promise<LaunchDetailed> {
    return new Promise((resolve, reject) => {
      let url = basePath + `/launch/${id}/`;

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class LauncherService {
  /**
   *
   */
  static launcherList(
    params: {
      /**  */
      id?: number;
      /**  */
      serialNumber?: string;
      /**  */
      flightProven?: string;
      /**  */
      launcherConfig?: string;
      /**  */
      launcherConfigManufacturer?: string;
      /** A search term. */
      search?: string;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/launcher/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        id: params['id'],
        serial_number: params['serialNumber'],
        flight_proven: params['flightProven'],
        launcher_config: params['launcherConfig'],
        launcher_config__manufacturer: params['launcherConfigManufacturer'],
        search: params['search'],
        ordering: params['ordering'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static launcherRead(options: IRequestOptions = {}): Promise<LauncherDetail> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/launcher/{id}/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class LocationService {
  /**
   *
   */
  static locationList(
    params: {
      /**  */
      name?: string;
      /**  */
      countryCode?: string;
      /**  */
      id?: number;
      /**  */
      padLocationId?: string;
      /** A search term. */
      search?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/location/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        name: params['name'],
        country_code: params['countryCode'],
        id: params['id'],
        pad__location_id: params['padLocationId'],
        search: params['search'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static locationRead(options: IRequestOptions = {}): Promise<LocationDetail> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/location/{id}/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class PadService {
  /**
   *
   */
  static padList(
    params: {
      /**  */
      name?: string;
      /**  */
      id?: number;
      /**  */
      location?: string;
      /** A search term. */
      search?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/pad/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        name: params['name'],
        id: params['id'],
        location: params['location'],
        search: params['search'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static padRead(options: IRequestOptions = {}): Promise<Pad> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/pad/{id}/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class ProgramService {
  /**
   *
   */
  static programList(
    params: {
      /** A search term. */
      search?: string;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/program/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        search: params['search'],
        ordering: params['ordering'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static programRead(options: IRequestOptions = {}): Promise<Program> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/program/{id}/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class SpacecraftService {
  /**
   *
   */
  static spacecraftList(
    params: {
      /**  */
      name?: string;
      /**  */
      status?: string;
      /**  */
      spacecraftConfig?: string;
      /** A search term. */
      search?: string;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/spacecraft/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        name: params['name'],
        status: params['status'],
        spacecraft_config: params['spacecraftConfig'],
        search: params['search'],
        ordering: params['ordering'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static spacecraftFlightList(
    params: {
      /**  */
      spacecraft?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/spacecraft/flight/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        spacecraft: params['spacecraft'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static spacecraftFlightRead(
    options: IRequestOptions = {},
  ): Promise<SpacecraftFlightDetailed> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/spacecraft/flight/{id}/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static spacecraftRead(
    options: IRequestOptions = {},
  ): Promise<SpacecraftDetailed> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/spacecraft/{id}/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class SpacestationService {
  /**
   *
   */
  static spacestationList(
    params: {
      /**  */
      name?: string;
      /**  */
      status?: string;
      /**  */
      owners?: string;
      /**  */
      orbit?: string;
      /**  */
      type?: string;
      /**  */
      ownersName?: string;
      /**  */
      ownersAbbrev?: string;
      /** A search term. */
      search?: string;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/spacestation/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        name: params['name'],
        status: params['status'],
        owners: params['owners'],
        orbit: params['orbit'],
        type: params['type'],
        owners__name: params['ownersName'],
        owners__abbrev: params['ownersAbbrev'],
        search: params['search'],
        ordering: params['ordering'],
        limit: params['limit'],
        offset: params['offset'],
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static spacestationRead(
    options: IRequestOptions = {},
  ): Promise<SpaceStationDetailed> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/spacestation/{id}/';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export interface Agency {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  featured?: boolean;

  /**  */
  type?: string;

  /**  */
  country_code?: string;

  /**  */
  abbrev?: string;

  /**  */
  description?: string;

  /**  */
  administrator?: string;

  /**  */
  founding_year?: string;

  /**  */
  launchers?: string;

  /**  */
  spacecraft?: string;

  /**  */
  parent?: string;

  /**  */
  image_url?: string;
}

export interface LauncherConfigDetailSerializerForAgency {
  /**  */
  id?: number;

  /**  */
  launch_library_id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  description?: string;

  /**  */
  family?: string;

  /**  */
  full_name?: string;

  /**  */
  variant?: string;

  /**  */
  alias?: string;

  /**  */
  min_stage?: number;

  /**  */
  max_stage?: number;

  /**  */
  length?: number;

  /**  */
  diameter?: number;

  /**  */
  maiden_flight?: Date;

  /**  */
  launch_mass?: number;

  /**  */
  leo_capacity?: number;

  /**  */
  gto_capacity?: number;

  /**  */
  to_thrust?: number;

  /**  */
  apogee?: number;

  /**  */
  vehicle_range?: number;

  /**  */
  image_url?: string;

  /**  */
  info_url?: string;

  /**  */
  wiki_url?: string;

  /**  */
  consecutive_successful_launches?: string;

  /**  */
  successful_launches?: string;

  /**  */
  failed_launches?: string;

  /**  */
  pending_launches?: string;
}

export interface SpacecraftConfigType {
  /**  */
  id?: number;

  /**  */
  name: string;
}

export interface SpacecraftConfigurationDetail {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  type?: SpacecraftConfigType;

  /**  */
  agency?: Agency;

  /**  */
  in_use?: boolean;

  /**  */
  capability?: string;

  /**  */
  history?: string;

  /**  */
  details?: string;

  /**  */
  maiden_flight?: Date;

  /**  */
  height?: number;

  /**  */
  diameter?: number;

  /**  */
  human_rated?: boolean;

  /**  */
  crew_capacity?: number;

  /**  */
  payload_capacity?: number;

  /**  */
  flight_life?: string;

  /**  */
  image_url?: string;

  /**  */
  nation_url?: string;

  /**  */
  wiki_link?: string;

  /**  */
  info_link?: string;
}

export interface AgencySerializerDetailed {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  featured?: boolean;

  /**  */
  type?: string;

  /**  */
  country_code?: string;

  /**  */
  abbrev?: string;

  /**  */
  description?: string;

  /**  */
  administrator?: string;

  /**  */
  founding_year?: string;

  /**  */
  launchers?: string;

  /**  */
  spacecraft?: string;

  /**  */
  parent?: string;

  /**  */
  launch_library_url?: string;

  /**  */
  total_launch_count?: string;

  /**  */
  successful_launches?: string;

  /**  */
  consecutive_successful_launches?: string;

  /**  */
  failed_launches?: string;

  /**  */
  pending_launches?: string;

  /**  */
  successful_landings?: string;

  /**  */
  failed_landings?: string;

  /**  */
  attempted_landings?: string;

  /**  */
  consecutive_successful_landings?: string;

  /**  */
  info_url?: string;

  /**  */
  wiki_url?: string;

  /**  */
  logo_url?: string;

  /**  */
  image_url?: string;

  /**  */
  nation_url?: string;

  /**  */
  launcher_list?: LauncherConfigDetailSerializerForAgency[];

  /**  */
  spacecraft_list?: SpacecraftConfigurationDetail[];
}

export interface AstronautStatus {
  /**  */
  id?: number;

  /**  */
  name: string;
}

export interface AstronautType {
  /**  */
  id?: number;

  /**  */
  name: string;
}

export interface AstronautNormal {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  status?: AstronautStatus;

  /**  */
  type?: AstronautType;

  /**  */
  date_of_birth: Date;

  /**  */
  date_of_death?: Date;

  /**  */
  nationality: string;

  /**  */
  bio: string;

  /**  */
  twitter?: string;

  /**  */
  instagram?: string;

  /**  */
  wiki?: string;

  /**  */
  agency?: Agency;

  /**  */
  profile_image?: string;

  /**  */
  profile_image_thumbnail?: string;

  /**  */
  last_flight?: string;

  /**  */
  first_flight?: string;
}

export interface AgencySerializerMini {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  type?: string;
}

export interface LaunchStatus {
  /**  */
  id: number;

  /**  */
  name?: string;
}

export interface LauncherConfigList {
  /**  */
  id?: number;

  /**  */
  launch_library_id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  family?: string;

  /**  */
  full_name?: string;

  /**  */
  variant?: string;
}

export interface RocketSerializerCommon {
  /**  */
  id?: number;

  /**  */
  configuration?: LauncherConfigList;
}

export interface Orbit {
  /**  */
  id?: number;

  /**  */
  name: string;

  /**  */
  abbrev: string;
}

export interface Mission {
  /**  */
  id?: number;

  /**  */
  launch_library_id?: number;

  /**  */
  name?: string;

  /**  */
  description?: string;

  /**  */
  launch_designator?: string;

  /**  */
  type?: string;

  /**  */
  orbit: Orbit;
}

export interface Location {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name?: string;

  /**  */
  country_code?: string;

  /**  */
  map_image?: string;

  /**  */
  total_launch_count?: string;

  /**  */
  total_landing_count?: string;
}

export interface Pad {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  agency_id?: number;

  /**  */
  name?: string;

  /**  */
  info_url?: string;

  /**  */
  wiki_url?: string;

  /**  */
  map_url?: string;

  /**  */
  latitude?: string;

  /**  */
  longitude?: string;

  /**  */
  location: Location;

  /**  */
  map_image?: string;

  /**  */
  total_launch_count?: string;
}

export interface Program {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  description?: string;

  /**  */
  agencies?: AgencySerializerMini[];

  /**  */
  image_url?: string;

  /**  */
  start_date?: Date;

  /**  */
  end_date?: Date;

  /**  */
  info_url?: string;

  /**  */
  wiki_url?: string;
}

export interface LaunchSerializerCommon {
  /**  */
  id?: string;

  /**  */
  url?: string;

  /**  */
  launch_library_id?: number;

  /**  */
  slug: string;

  /**  */
  name?: string;

  /**  */
  status?: LaunchStatus;

  /**  */
  net?: Date;

  /**  */
  window_end?: Date;

  /**  */
  window_start?: Date;

  /**  */
  inhold?: boolean;

  /**  */
  tbdtime?: boolean;

  /**  */
  tbddate?: boolean;

  /**  */
  probability?: number;

  /**  */
  holdreason?: string;

  /**  */
  failreason?: string;

  /**  */
  hashtag?: string;

  /**  */
  launch_service_provider?: AgencySerializerMini;

  /**  */
  rocket?: RocketSerializerCommon;

  /**  */
  mission?: Mission;

  /**  */
  pad?: Pad;

  /**  */
  infoURLs?: string;

  /**  */
  vidURLs?: string;

  /**  */
  webcast_live?: boolean;

  /**  */
  image?: string;

  /**  */
  infographic?: string;

  /**  */
  program?: Program[];
}

export interface SpacecraftStatus {
  /**  */
  id?: number;

  /**  */
  name: string;
}

export interface SpacecraftConfig {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  type?: SpacecraftConfigType;

  /**  */
  agency?: AgencySerializerMini;

  /**  */
  in_use?: boolean;

  /**  */
  image_url?: string;
}

export interface Spacecraft {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  serial_number?: string;

  /**  */
  status?: SpacecraftStatus;

  /**  */
  description: string;

  /**  */
  spacecraft_config?: SpacecraftConfig;
}

export interface SpacecraftFlight {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  destination?: string;

  /**  */
  mission_end?: Date;

  /**  */
  spacecraft?: Spacecraft;

  /**  */
  launch?: LaunchSerializerCommon;
}

export interface AstronautDetailed {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  status?: AstronautStatus;

  /**  */
  type?: AstronautType;

  /**  */
  agency?: AgencySerializerMini;

  /**  */
  date_of_birth: Date;

  /**  */
  date_of_death?: Date;

  /**  */
  nationality: string;

  /**  */
  twitter?: string;

  /**  */
  instagram?: string;

  /**  */
  bio: string;

  /**  */
  profile_image?: string;

  /**  */
  profile_image_thumbnail?: string;

  /**  */
  wiki?: string;

  /**  */
  flights?: LaunchSerializerCommon[];

  /**  */
  landings?: SpacecraftFlight[];

  /**  */
  last_flight?: string;

  /**  */
  first_flight?: string;
}

export interface LauncherConfig {
  /**  */
  id?: number;

  /**  */
  launch_library_id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  manufacturer?: Agency;

  /**  */
  program?: Program[];

  /**  */
  family?: string;

  /**  */
  full_name?: string;

  /**  */
  variant?: string;

  /**  */
  reusable?: boolean;

  /**  */
  image_url?: string;

  /**  */
  info_url?: string;

  /**  */
  wiki_url?: string;
}

export interface AgencySerializerDetailedCommon {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  featured?: boolean;

  /**  */
  type?: string;

  /**  */
  country_code?: string;

  /**  */
  abbrev?: string;

  /**  */
  description?: string;

  /**  */
  administrator?: string;

  /**  */
  founding_year?: string;

  /**  */
  launchers?: string;

  /**  */
  spacecraft?: string;

  /**  */
  launch_library_url?: string;

  /**  */
  total_launch_count?: string;

  /**  */
  consecutive_successful_launches?: string;

  /**  */
  successful_launches?: string;

  /**  */
  failed_launches?: string;

  /**  */
  pending_launches?: string;

  /**  */
  consecutive_successful_landings?: string;

  /**  */
  successful_landings?: string;

  /**  */
  failed_landings?: string;

  /**  */
  attempted_landings?: string;

  /**  */
  info_url?: string;

  /**  */
  wiki_url?: string;

  /**  */
  logo_url?: string;

  /**  */
  image_url?: string;

  /**  */
  nation_url?: string;
}

export interface LauncherConfigDetail {
  /**  */
  id?: number;

  /**  */
  launch_library_id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  description?: string;

  /**  */
  family?: string;

  /**  */
  full_name?: string;

  /**  */
  manufacturer?: AgencySerializerDetailedCommon;

  /**  */
  program?: Program[];

  /**  */
  variant?: string;

  /**  */
  alias?: string;

  /**  */
  min_stage?: number;

  /**  */
  max_stage?: number;

  /**  */
  length?: number;

  /**  */
  diameter?: number;

  /**  */
  maiden_flight?: Date;

  /**  */
  launch_mass?: number;

  /**  */
  leo_capacity?: number;

  /**  */
  gto_capacity?: number;

  /**  */
  to_thrust?: number;

  /**  */
  apogee?: number;

  /**  */
  vehicle_range?: number;

  /**  */
  image_url?: string;

  /**  */
  info_url?: string;

  /**  */
  wiki_url?: string;

  /**  */
  total_launch_count?: string;

  /**  */
  consecutive_successful_launches?: string;

  /**  */
  successful_launches?: string;

  /**  */
  failed_launches?: string;

  /**  */
  pending_launches?: string;
}

export interface SpacecraftConfiguration {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  agency?: Agency;

  /**  */
  in_use?: boolean;

  /**  */
  capability?: string;

  /**  */
  maiden_flight?: Date;

  /**  */
  human_rated?: boolean;

  /**  */
  crew_capacity?: number;

  /**  */
  image_url?: string;

  /**  */
  nation_url?: string;

  /**  */
  wiki_link?: string;

  /**  */
  info_link?: string;
}

export interface SpacecraftFlightSerializerForDockingEvent {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  destination?: string;

  /**  */
  mission_end?: Date;

  /**  */
  spacecraft?: Spacecraft;
}

export interface DockingLocation {
  /**  */
  id?: number;

  /**  */
  name: string;
}

export interface DockingEvent {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  launch_id: string;

  /**  */
  docking: Date;

  /**  */
  departure?: Date;

  /**  */
  flight_vehicle?: SpacecraftFlightSerializerForDockingEvent;

  /**  */
  docking_location?: DockingLocation;
}

export interface SpacecraftDetailedNoFlights {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  serial_number?: string;

  /**  */
  status?: SpacecraftStatus;

  /**  */
  description: string;

  /**  */
  spacecraft_config?: SpacecraftConfigurationDetail;
}

export interface SpacecraftFlightSerializerForDockingEventDetailed {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  destination?: string;

  /**  */
  mission_end?: Date;

  /**  */
  spacecraft?: SpacecraftDetailedNoFlights;
}

export interface SpaceStationSerializerForDockingEvent {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  image_url?: string;
}

export interface DockingEventDetailed {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  launch_id: string;

  /**  */
  docking: Date;

  /**  */
  departure?: Date;

  /**  */
  flight_vehicle?: SpacecraftFlightSerializerForDockingEventDetailed;

  /**  */
  docking_location?: DockingLocation;

  /**  */
  space_station?: SpaceStationSerializerForDockingEvent;
}

export interface EventType {
  /**  */
  id: number;

  /**  */
  name?: string;
}

export interface SpaceStationStatus {
  /**  */
  id?: number;

  /**  */
  name: string;
}

export interface SpaceStationSerializerForExpedition {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  status?: SpaceStationStatus;

  /**  */
  orbit?: string;

  /**  */
  image_url?: string;
}

export interface Expedition {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  start: Date;

  /**  */
  end?: Date;

  /**  */
  spacestation?: SpaceStationSerializerForExpedition;
}

export interface SpaceStationSerializerForCommon {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  status?: SpaceStationStatus;

  /**  */
  founded: Date;

  /**  */
  description: string;

  /**  */
  orbit?: string;

  /**  */
  image_url?: string;
}

export interface Events {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  slug: string;

  /**  */
  name: string;

  /**  */
  type?: EventType;

  /**  */
  description?: string;

  /**  */
  location?: string;

  /**  */
  news_url?: string;

  /**  */
  video_url?: string;

  /**  */
  feature_image?: string;

  /**  */
  date?: Date;

  /**  */
  launches: LaunchSerializerCommon[];

  /**  */
  expeditions: Expedition[];

  /**  */
  spacestations: SpaceStationSerializerForCommon[];

  /**  */
  program?: Program[];
}

export interface AgencyList {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  abbrev?: string;
}

export interface SpaceStationDetailedSerializerForExpedition {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  status?: SpaceStationStatus;

  /**  */
  founded: Date;

  /**  */
  description: string;

  /**  */
  orbit?: string;

  /**  */
  image_url?: string;

  /**  */
  owners?: AgencyList[];
}

export interface Astronaut {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  status?: AstronautStatus;

  /**  */
  agency?: AgencySerializerMini;

  /**  */
  profile_image?: string;

  /**  */
  profile_image_thumbnail?: string;
}

export interface AstronautFlightForExpedition {
  /**  */
  id?: number;

  /**  */
  role?: string;

  /**  */
  astronaut?: Astronaut;
}

export interface ExpeditionDetail {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  start: Date;

  /**  */
  end?: Date;

  /**  */
  spacestation?: SpaceStationDetailedSerializerForExpedition;

  /**  */
  crew?: AstronautFlightForExpedition[];
}

export interface LauncherDetailed {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  details?: string;

  /**  */
  flight_proven?: boolean;

  /**  */
  serial_number?: string;

  /**  */
  status?: string;

  /**  */
  image_url?: string;

  /**  */
  successful_landings?: string;

  /**  */
  attempted_landings?: string;

  /**  */
  flights?: string;

  /**  */
  last_launch_date?: string;

  /**  */
  first_launch_date?: string;
}

export interface LandingLocation {
  /**  */
  id?: number;

  /**  */
  name?: string;

  /**  */
  abbrev?: string;

  /**  */
  description?: string;

  /**  */
  location: Location;

  /**  */
  successful_landings?: string;
}

export interface LandingType {
  /**  */
  id?: number;

  /**  */
  name?: string;

  /**  */
  abbrev?: string;

  /**  */
  description?: string;
}

export interface Landing {
  /**  */
  id?: number;

  /**  */
  attempt?: boolean;

  /**  */
  success?: boolean;

  /**  */
  description?: string;

  /**  */
  location?: LandingLocation;

  /**  */
  type?: LandingType;
}

export interface LaunchSerializerMini {
  /**  */
  id?: string;

  /**  */
  name?: string;
}

export interface FirstStage {
  /**  */
  id?: number;

  /**  */
  type?: string;

  /**  */
  reused?: boolean;

  /**  */
  launcher_flight_number?: string;

  /**  */
  launcher?: LauncherDetailed;

  /**  */
  landing?: Landing;

  /**  */
  previous_flight_date?: string;

  /**  */
  turn_around_time_days?: string;

  /**  */
  previous_flight?: LaunchSerializerMini;
}

export interface AstronautDetailedSerializerNoFlights {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  type?: AstronautType;

  /**  */
  status?: AstronautStatus;

  /**  */
  agency?: AgencySerializerMini;

  /**  */
  date_of_birth: Date;

  /**  */
  date_of_death?: Date;

  /**  */
  nationality: string;

  /**  */
  twitter?: string;

  /**  */
  instagram?: string;

  /**  */
  bio: string;

  /**  */
  profile_image?: string;

  /**  */
  wiki?: string;

  /**  */
  last_flight?: string;

  /**  */
  first_flight?: string;
}

export interface AstronautFlight {
  /**  */
  id?: number;

  /**  */
  role?: string;

  /**  */
  astronaut?: AstronautDetailedSerializerNoFlights;
}

export interface DockingEventSerializerForSpacecraftFlight {
  /**  */
  spacestation?: SpaceStationSerializerForCommon;

  /**  */
  docking: Date;

  /**  */
  departure?: Date;

  /**  */
  docking_location?: DockingLocation;
}

export interface SpacecraftFlightDetailedSerializerForLaunch {
  /**  */
  id: number;

  /**  */
  url?: string;

  /**  */
  mission_end?: Date;

  /**  */
  destination?: string;

  /**  */
  launch_crew?: AstronautFlight[];

  /**  */
  onboard_crew?: AstronautFlight[];

  /**  */
  landing_crew?: AstronautFlight[];

  /**  */
  spacecraft?: SpacecraftDetailedNoFlights;

  /**  */
  docking_events?: DockingEventSerializerForSpacecraftFlight[];
}

export interface RocketDetailed {
  /**  */
  id?: number;

  /**  */
  configuration?: LauncherConfigDetail;

  /**  */
  launcher_stage?: FirstStage[];

  /**  */
  spacecraft_stage?: SpacecraftFlightDetailedSerializerForLaunch;
}

export interface InfoURL {
  /**  */
  priority?: number;

  /**  */
  title?: string;

  /**  */
  description?: string;

  /**  */
  feature_image?: string;

  /**  */
  url: string;
}

export interface VidURL {
  /**  */
  priority?: number;

  /**  */
  title?: string;

  /**  */
  description?: string;

  /**  */
  feature_image?: string;

  /**  */
  url: string;
}

export interface LaunchDetailed {
  /**  */
  id?: string;

  /**  */
  url?: string;

  /**  */
  launch_library_id?: number;

  /**  */
  slug: string;

  /**  */
  name?: string;

  /**  */
  status?: LaunchStatus;

  /**  */
  net?: Date;

  /**  */
  window_end?: Date;

  /**  */
  window_start?: Date;

  /**  */
  inhold?: boolean;

  /**  */
  tbdtime?: boolean;

  /**  */
  tbddate?: boolean;

  /**  */
  probability?: number;

  /**  */
  holdreason?: string;

  /**  */
  failreason?: string;

  /**  */
  hashtag?: string;

  /**  */
  launch_service_provider?: AgencySerializerDetailedCommon;

  /**  */
  rocket?: RocketDetailed;

  /**  */
  mission?: Mission;

  /**  */
  pad?: Pad;

  /**  */
  infoURLs?: InfoURL[];

  /**  */
  vidURLs?: VidURL[];

  /**  */
  webcast_live?: boolean;

  /**  */
  image?: string;

  /**  */
  infographic?: string;

  /**  */
  program?: Program[];

  /**  */
  orbital_launch_attempt_count?: string;

  /**  */
  location_launch_attempt_count?: string;

  /**  */
  pad_launch_attempt_count?: string;

  /**  */
  agency_launch_attempt_count?: string;

  /**  */
  orbital_launch_attempt_count_year?: string;

  /**  */
  location_launch_attempt_count_year?: string;

  /**  */
  pad_launch_attempt_count_year?: string;

  /**  */
  agency_launch_attempt_count_year?: string;
}

export interface Launcher {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  flight_proven?: boolean;

  /**  */
  serial_number?: string;

  /**  */
  status?: string;

  /**  */
  details?: string;

  /**  */
  launcher_config?: LauncherConfigList;

  /**  */
  image_url?: string;

  /**  */
  flights?: string;

  /**  */
  last_launch_date?: string;

  /**  */
  first_launch_date?: string;
}

export interface LauncherDetail {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  flight_proven?: boolean;

  /**  */
  serial_number?: string;

  /**  */
  status?: string;

  /**  */
  details?: string;

  /**  */
  launcher_config?: LauncherConfigDetail;

  /**  */
  image_url?: string;

  /**  */
  successful_landings?: string;

  /**  */
  attempted_landings?: string;

  /**  */
  flights?: string;

  /**  */
  last_launch_date?: string;

  /**  */
  first_launch_date?: string;
}

export interface PadSerializerNoLocation {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  agency_id?: number;

  /**  */
  name?: string;

  /**  */
  info_url?: string;

  /**  */
  wiki_url?: string;

  /**  */
  map_url?: string;

  /**  */
  latitude?: string;

  /**  */
  longitude?: string;

  /**  */
  map_image?: string;

  /**  */
  total_launch_count?: string;
}

export interface LocationDetail {
  /**  */
  id?: number;

  /**  */
  name?: string;

  /**  */
  country_code?: string;

  /**  */
  map_image?: string;

  /**  */
  total_launch_count?: string;

  /**  */
  total_landing_count?: string;

  /**  */
  pads: PadSerializerNoLocation[];
}

export interface SpacecraftFlightDetailed {
  /**  */
  id: number;

  /**  */
  url?: string;

  /**  */
  mission_end?: Date;

  /**  */
  destination?: string;

  /**  */
  launch_crew?: AstronautFlight[];

  /**  */
  onboard_crew?: AstronautFlight[];

  /**  */
  landing_crew?: AstronautFlight[];

  /**  */
  spacecraft?: SpacecraftDetailedNoFlights;

  /**  */
  launch?: LaunchSerializerCommon;

  /**  */
  docking_events?: DockingEventSerializerForSpacecraftFlight[];
}

export interface SpacecraftDetailed {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  serial_number?: string;

  /**  */
  status?: SpacecraftStatus;

  /**  */
  description: string;

  /**  */
  spacecraft_config?: SpacecraftConfigurationDetail;

  /**  */
  flights?: SpacecraftFlight[];
}

export interface SpaceStationType {
  /**  */
  id?: number;

  /**  */
  name: string;
}

export interface ExpeditionSerializerForSpacestation {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  start: Date;

  /**  */
  end?: Date;
}

export interface SpaceStation {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  status?: SpaceStationStatus;

  /**  */
  type?: SpaceStationType;

  /**  */
  founded: Date;

  /**  */
  deorbited?: Date;

  /**  */
  description: string;

  /**  */
  orbit?: string;

  /**  */
  owners?: AgencyList[];

  /**  */
  active_expedition?: ExpeditionSerializerForSpacestation[];

  /**  */
  image_url?: string;
}

export interface ExpeditionDetailedSerializerForSpacestation {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  start: Date;

  /**  */
  end?: Date;

  /**  */
  crew?: AstronautFlightForExpedition[];
}

export interface SpacecraftFlightForDockingEvent {
  /**  */
  id: number;

  /**  */
  url?: string;

  /**  */
  spacecraft?: SpacecraftDetailedNoFlights;

  /**  */
  launch?: LaunchSerializerCommon;
}

export interface DockingEventDetailedSerializerForSpacestation {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  docking: Date;

  /**  */
  departure?: Date;

  /**  */
  flight_vehicle?: SpacecraftFlightForDockingEvent;
}

export interface DockingLocationSerializerForSpacestation {
  /**  */
  id?: number;

  /**  */
  name: string;

  /**  */
  docked?: DockingEventDetailedSerializerForSpacestation;
}

export interface SpaceStationDetailed {
  /**  */
  id?: number;

  /**  */
  url?: string;

  /**  */
  name: string;

  /**  */
  status?: SpaceStationStatus;

  /**  */
  type?: SpaceStationType;

  /**  */
  founded: Date;

  /**  */
  deorbited?: Date;

  /**  */
  height?: number;

  /**  */
  width?: number;

  /**  */
  mass?: number;

  /**  */
  volume?: number;

  /**  */
  description: string;

  /**  */
  orbit?: string;

  /**  */
  onboard_crew?: string;

  /**  */
  owners?: Agency[];

  /**  */
  active_expeditions?: ExpeditionDetailedSerializerForSpacestation[];

  /**  */
  docking_location?: DockingLocationSerializerForSpacestation[];

  /**  */
  image_url?: string;
}
