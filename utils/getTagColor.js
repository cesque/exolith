export default function getTagColor(tag) {
    let colors = [
        '#1abc9c',
        '#2ecc71',
        '#3498db',
        '#8e44ad',
        '#f39c12',
        '#d35400',
        '#e74c3c',
    ]

    let hash = tag
        .split('')
        .map(x => x.charCodeAt(0))
        .reduce((p, c) => (p + c) + (c % 2 == 0 ? 7 : 0) + (c % 3 == 0 ? -3 : 0), 0)

    return colors[hash % colors.length]
}