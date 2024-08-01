export function findKeyByValue(object:{[key: string]:string},value: string): string | null {
    
    for(const [key, valueT] of Object.entries(object)){
        if( value === valueT) return key;
    }

    return null;
}