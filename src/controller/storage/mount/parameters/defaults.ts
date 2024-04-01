import { MountOptions, VfsOptions } from "../../../../type/rclone/storage/mount/parameters";


// 示例：初始化VfsOptions和MountOptions的默认值
const defaultVfsConfig: VfsOptions = {
    ReadOnly: false,
    CacheMaxAge: 3600000000000,
    CacheMaxSize: -1,
    CacheMode: {
        select: 'minimal',
        values: [
            'off',
            'minimal',
            'writes',
            'full',
        ]
    },
    CachePollInterval: 60000000000,
    CaseInsensitive: false,
    ChunkSize: 134217728,
    ChunkSizeLimit: -1,
    DirCacheTime: 300000000000,
    DirPerms: 511,
    FilePerms: 438,
    NoChecksum: false,
    NoModTime: false,
    NoSeek: false,
    PollInterval: 60000000000,
    ReadAhead: 0,
    ReadWait: 20000000,
    WriteBack: 5000000000,
    WriteWait: 1000000000,    
    Refresh: false,
    BlockNormDupes: false,
    UsedIsSize: false,
    FastFingerprint: false,
    DiskSpaceTotalSize: -1,
    UID: 4294967295,
    GID: 4294967295,
    Umask: 0,

};

const defaultMountConfig: MountOptions = {
    VolumeName: '',
    AllowNonEmpty: false,
    AllowOther: false,
    AllowRoot: false,
    AsyncRead: true,
    AttrTimeout: 1000000000,
    Daemon: false,
    DaemonTimeout: 0,
    DebugFUSE: false,
    DefaultPermissions: false,
    ExtraFlags: [],
    ExtraOptions: [],
    MaxReadAhead: 131072,
    NoAppleDouble: true,
    NoAppleXattr: false,
    WritebackCache: false,
    DaemonWait: 0, 
    DeviceName: '',
    NetworkMode: false, //挂载为网络驱动器
    //CaseInsensitive: null,
};

export { defaultVfsConfig, defaultMountConfig }