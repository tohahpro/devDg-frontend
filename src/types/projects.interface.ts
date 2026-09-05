export interface IPreviewImage {
    id: string;
    url: string;
    order: string;
    projectId: string;
    createdAt: string;
    updatedAt: string;
}

export interface IFeature {
    id: string;
    name: string;
    projectId: string;
    createdAt: string;
    updatedAt: string;
}

export interface IHighlight {
    id: string;
    name: string;
    projectId: string;
    createdAt: string;
    updatedAt: string;
}

export interface IChallenge {
    id: string;
    title: string;
    description: string;
    projectId: string;
    createdAt: string;
    updatedAt: string;
}

export interface IProjectState {
    id: string;
    users: string;
    performance: string;
    uptime: string;
    projectId: string;
    createdAt: string;
    updatedAt: string;
}

export interface IProject {
    id: string;
    title: string;
    slug: string;
    description: string;
    gitHubFrontend: string;
    gitHubBackend: string;
    liveLink: string;
    heroImage: string;
    category: string;
    status: string;
    duration: string;
    techStack: string;
    isFeatured: boolean;
    createdAt: string;
    updatedAt: string;

    features: IFeature[];
    previewImages: IPreviewImage[];
    highlights: IHighlight[];
    challenges: IChallenge[];
    projectState: IProjectState;
}

export interface IProjectsResponse {
    meta: {
        total: number;
    };
    data: IProject[];
}