function toggleFolder(folderId, folderElement) {
    var folder = document.getElementById(folderId);
    var folderIcon = folderElement.querySelector('.folder-icon');

    if (folder.style.display === 'none' || folder.style.display === '') {
        folder.style.display = 'block';
        folderIcon.src = 'icons/folder-open.png';
    } else {
        folder.style.display = 'none';
        folderIcon.src = 'icons/folder-closed.png';
    }
}
