const generateMediaUrl = (type, uuid, name) => {
    let compiledname = name.replace(/\s+/g, '-').toLowerCase();

    return `/${type.toLowerCase()}/${uuid}/${compiledname}`
}

export default generateMediaUrl