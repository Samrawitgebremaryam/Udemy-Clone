import React from 'react';
import styles from './ThisCourseIncludes.module.css';
import {
    AllInclusive,
    Download,
    EmojiEvents,
    InsertDriveFile,
    OndemandVideo,
    StayCurrentPortrait,
} from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

function ThisCourseIncludes({ details }) {
    const {
        content_length_video: seconds = 0,
        num_additional_assets: downloadable = 0,
        article_count: articles = 0, // Assuming article_count might be added to your JSON data
        full_lifetime_access: lifetimeAccess = true, // Assuming this might be a boolean field in your JSON data
        access_on_mobile_tv: mobileTvAccess = true, // Assuming this might be a boolean field in your JSON data
        certificate_of_completion: certificate = true, // Assuming this might be a boolean field in your JSON data
    } = details;

    const icons = [
        <OndemandVideo className={styles.black} />,
        <InsertDriveFile className={styles.black} />,
        <Download className={styles.black} />,
        <AllInclusive className={styles.black} />,
        <StayCurrentPortrait className={styles.black} />,
        <EmojiEvents className={styles.black} />,
    ];
    const itemsText = [
        `${parseInt(seconds / 60 / 60)} hours on-demand video`,
        `${articles} article${articles > 1 ? 's' : ''}`,
        `${downloadable} downloadable resources`,
        lifetimeAccess ? 'Full lifetime access' : 'Limited access',
        mobileTvAccess ? 'Access on mobile and TV' : 'Limited device access',
        certificate ? 'Certificate of completion' : 'No certificate provided',
    ];

    return (
        <main className={styles.mainContainer}>
            <p className={styles.header}>This course includes:</p>
            <List>
                {icons.map((icon, idx) => (
                    <ListItem key={idx} disablePadding className={styles.listItem}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText className={styles.itemText}>
                            <span className={styles.black}>{itemsText[idx]}</span>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </main>
    );
}

export default ThisCourseIncludes;
