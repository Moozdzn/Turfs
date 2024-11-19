export interface GangRole {
    name: string;
    isboss?: boolean;
}

export interface Gang {
    name: string;
    label: string;
    roles: GangRole[],
    color: string;
}

interface Access {
    name: string;
    label: string;
    description: string;
    grades: string[];
}

export interface GangAccess extends Array<Access> {}