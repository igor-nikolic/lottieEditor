var require= {
    "deps":["ez",
    "system"],
    "shim": {
        "ez":["backbone",
        "handlebars"],
        "system":["backbone",
        "handlebars",
        "jquery-ui"],
        "backbone":["underscore",
        "jquery"],
        "tweenmax": {
            "exports": "TweenMax"
        }
        ,
        "google-ima3": {
            "exports": "google.ima"
        }
    }
    ,
    "config": {
        "ez\/language": {
            "EMPTY": "EMPTY"
        }
        ,
        "apps\/promoVideos\/pricing": {
            "isNewPricingPage":true,
            "pricingWidgetMode":"default",
            "overChargePopupMode":"new_style_annual",
            "flatTogglePricingMode":"no",
            "isTransparentPricingEnabled":true,
            "checkoutCta":"Purchase Now",
            "faqsList":[ {
                "title": "What payment services do you support?", "text": "We accept all major credit cards."
            }
            ,
            {
                "title": "Is this a secure site for purchases?", "text": "Absolutely! We work with <a href=\"https:\/\/stripe.com\/\" target=\"_blank\">Stripe<\/a> which guarantees your safety and security. All site communication and data transfer are secured and encrypted."
            }
            ,
            {
                "title": "Can I upgrade my plan?", "text": "Yes, you can. You can upgrade your plan at any time. If you have pending unused videos they will be calculated into your new subscription plan."
            }
            ,
            {
                "title": "How does the billing cycle work?", "text": "When you subscribe to any of our monthly plans, you will be billed monthly and your plan renews each month based on your initial subscription date. This is considered your monthly billing cycle. Our Annual Plans have one-year billing cycles and are billed as one payment per year."
            }
            ,
            {
                "title": "Can I downgrade my plan?", "text": "You can downgrade your monthly subscription plan at any time from within the Billing section of the website. The downgrade will take effect during the next billing cycle and all unused video credits will rollover to your downgraded plan. All annual downgrades will take effect on the following one-year billing cycle."
            }
            ,
            {
                "title": "Can I cancel my subscription?", "text": "Monthly subscriptions are billed month to month. No contract. No obligation. You can cancel your monthly subscription at any time. Annual purchases come with an awesome discount and run on a one-year billing cycle with cancellation available for the following year. That said, we hope you'll fall in love with Promo and never want to leave (-:"
            }
            ,
            {
                "title": "Can I update my card details?", "text": "Yes. Go to the billing section of your account and update your payment information."
            }
            ,
            {
                "title": "I want only one video, do I have to sign up for a plan?", "text": "We hear you. Unfortunately, we don't offer single video options because we know that to truly make an impact on your business you need to be consistent with your video marketing efforts and we want to see you succeed."
            }
            ,
            {
                "title": "I used all the videos I have this month, now what?", "text": "No problem. You can purchase additional videos even if you hit your monthly or annual quotas. You will be charged per video at the relative price of your plan. For example, if you are subscribed to four videos for $99 per month, an extra video will cost $25. Another option is to upgrade your plan and receive additional videos at a lower price per video. This is usually good for someone who needs more than one video over their quota."
            }
            ],
            "isLightBg":true
        }
        ,
        "system": {
            "typeKit":"",
            "language":"en",
            "locale":"en_US",
            "cdnHost":"ak01-cdn.slidely.com",
            "revision":1531928516,
            "connected":true,
            "analytics": {
                "google": {
                    "accountId": "UA-17257037-18", "pageName": false
                }
                ,
                "mixpanel": {
                    "accountId": "e7d2894fb113ce2e99d62bcfd0f0a3f0"
                }
            }
            ,
            "session": {
                "connected":true,
                "error":false,
                "firstName":"Igor",
                "lastName":"Nikolic",
                "fullName":"Igor Nikolic",
                "email":"igrnklc@gmail.com",
                "token":"cd99a7302d2b13a76a27b400d411f241",
                "alias":"igornikolic10",
                "profilePictureUrl":"https:\/\/graph.facebook.com\/1461527174172922\/picture?return_ssl_resources=1",
                "sessionId":"2nrr6et0g8bgk74l6515e35u9jh0pjdt",
                "dataVersion":1,
                "isVerified":true,
                "hasPromoAccount":true,
                "conversionId":null,
                "conversionOfferId":null,
                "accounts": {
                    "native":false,
                    "facebook": {
                        "id": "1461527174172922"
                    }
                }
                ,
                "onBoardComplete":true
            }
            ,
            "facebook": {
                "applicationId": "255083304564274", "applicationNamespace": "slidely", "defaultPermissions": "email,user_photos", "tagApiPixelId": "712371922135655", "channelUrl": "https:\/\/slide.ly\/fc.php"
            }
            ,
            "isOnboardScriptEnabled":true,
            "featureFlags": {
                "whiteLabelSharingEnabled": false, "uploadVideo": true, "squareAndVerticalVideos": true, "multiclips3videos": true, "multiclips5videos": true
            }
            ,
            "userPreferences": {
                "vertical": null, "businessType": "Health & Fitness", "businessSubType": "Yoga", "defaultKeyword": "yoga", "videoObjective": "", "videoPlatform": "", "logoUrl": null, "logoBackgroundColor": null, "logoColorsPalette": null, "businessName": "", "recentColors": null, "customFonts": null, "uploadNotSupportedPopupDisabled": false
            }
            ,
            "adroll": {
                "adrollAdvId": "6FTQJCG37NG4XKDBFGHYSS", "adrollPixId": "QZZSSZCSSJC3LGMSLLGVXZ"
            }
            ,
            "upgradeErrorUrl":"https:\/\/slide.ly\/error\/upgrade",
            "earlyAccessFlag":false
        }
        ,
        "system\/reports": {
            "defaults": {
                "plan": null, "userStatus": "registered", "user": "cd99a7302d2b13a76a27b400d411f241", "keyword": "yoga", "pagePlatform": "desktop", "pageType": "create-from", "rawVideosIds": ["f9ef79286b341ea98a0718ea0cf281a1"], "hashId": "5acf1a8e6e1a2fc0182054d6", "creator": "cd99a7302d2b13a76a27b400d411f241", "userPrefs_vertical": null, "userPrefs_businessType": "Health & Fitness", "userPrefs_businessSubType": "Yoga", "userPrefs_defaultKeyword": "yoga", "userPrefs_videoObjective": "", "userPrefs_videoPlatform": "", "userPrefs_logoUrl": null, "userPrefs_logoBackgroundColor": null, "userPrefs_logoColorsPalette": null, "userPrefs_recentColors": null, "userPrefs_uploadNotSupportedPopupDisabled": false, "editorVersion": "2.5", "isRevisionMode": false, "isCollection": true, "isUploadedMusic": false, "originCollectionId": "5acf1a8e6e1a2fc0182054d6", "lang": "en", "source": null, "campaign": null, "clickedOn": "item_cta_collection_tab_library_filter_most_popular", "utm_medium": null, "utm_term": null, "utm_creative": null, "fb_conversion_pixel": null, "tid": 0
            }
            ,
            "reportUrl":"\/reports\/%s\/%s",
            "log":true,
            "callbackTimeout":1000
        }
        ,
        "system\/session": {
            "ajaxUrl": "\/data\/user\/session"
        }
        ,
        "system\/external\/facebook": {
            "cookieId": "ezFb"
        }
        ,
        "system\/external\/tuneaffiliate": {
            "conversionExternalId": null, "conversionOfferId": null, "affiliateInfo": null
        }
        ,
        "socialproof": {
            "isSocialNotificationEnabled": false
        }
        ,
        "apps\/promoVideos\/create": {
            "userPreferences": {
                "vertical": null, "businessType": "Health & Fitness", "businessSubType": "Yoga", "defaultKeyword": "yoga", "videoObjective": "", "videoPlatform": "", "logoUrl": null, "logoBackgroundColor": null, "logoColorsPalette": null, "businessName": "", "recentColors": null, "customFonts": null, "uploadNotSupportedPopupDisabled": false
            }
            ,
            "showWizard":false,
            "isEditMode":true,
            "promoVideoData": {
                "hash":"5acf1a8e6e1a2fc0182054d6",
                "logo": {
                    "logoUrl": "\/promoVideos\/user\/best-fit-logo?s=video&url=https:\/\/ez-promo-videos-users.s3.amazonaws.com\/logos\/promoVideos\/videos\/bd\/d4\/bdd41f09ef84eeeb5b6727cdf3bed4e1\/1523522186.png", "logoThumbUrl": "https:\/\/ak04-cdn.slidely.com\/promoVideos\/user\/best-fit-logo?url=%2FpromoVideos%2Fuser%2Fbest-fit-logo%3Fs%3Dvideo%26url%3Dhttps%3A%2F%2Fez-promo-videos-users.s3.amazonaws.com%2Flogos%2FpromoVideos%2Fvideos%2Fbd%2Fd4%2Fbdd41f09ef84eeeb5b6727cdf3bed4e1%2F1523522186.png", "logoBackgroundColor": "rgba(255,255,255,0)", "colorsPalette": ""
                }
                ,
                "captions":[],
                "title":"",
                "music":[ {
                    "start":0,
                    "end":15,
                    "isFadeOut":false,
                    "track": {
                        "id": "56819eb9f76160005f8b4567", "title": "Tea Time", "artist": "UN KNOWN", "thumbnailUrl": "https:\/\/ak04-cdn.slidely.com\/media\/audio-thumbs\/57\/6a\/576a9a9e2d30e683388b45d8.jpg", "url": "https:\/\/ak04-cdn.slidely.com\/media\/audio\/54\/a6\/54a60734e7cd3af1d65d87d6ef4570dc-15.mp3?dv=0", "isUpload": false, "type": "library", "isMultiDuration": true, "isNew": false, "createDate": "2015-12-28 20:42:33"
                    }
                }
                ],
                "ratio":"16:9",
                "duration":15,
                "decoration": {
                    "version":"2.5.0",
                    "decorationData":[ {
                        "layout":"CONTAINER",
                        "type":"caption",
                        "guid":"ba9-88ab-8a8",
                        "config":[],
                        "data":[],
                        "style":[],
                        "timing": {
                            "start": 1.0918032786885, "end": 5.0950819672131
                        }
                        ,
                        "children":[ {
                            "layout":"lottie",
                            "type":"caption",
                            "guid":"a8a-9a98-a89",
                            "config":[],
                            "data": {
                                "name":"Animation23",
                                "inDuration":800,
                                "outDuration":600,
                                "id":"Animation23_L",
                                "textAlign":"left",
                                "value":"INHALE THE<br>FUTURE",
                                "colors":[],
                                "timing":[],
                                "style": {
                                    "width": 829.06, "height": 201.6, "x": 94.09, "y": 76.06
                                }
                                ,
                                "fonts":[ {
                                    "font": "Quicksand", "weight": 400
                                }
                                ]
                            }
                            ,
                            "style":[],
                            "timing":[],
                            "children":[],
                            "disabled":false,
                            "hidden":false,
                            "autofocus":true,
                            "registeredToGrid":true
                        }
                        ],
                        "isOffstage":false
                    }
                    ,
                    {
                        "layout":"CONTAINER",
                        "type":"caption",
                        "guid":"ab9-9a88-88a",
                        "config":[],
                        "data":[],
                        "style":[],
                        "timing": {
                            "start": 5.8065573770492, "end": 9.8098360655738
                        }
                        ,
                        "children":[ {
                            "layout":"lottie",
                            "type":"caption",
                            "guid":"888-88bb-8ab",
                            "config":[],
                            "data": {
                                "name":"Animation23",
                                "inDuration":800,
                                "outDuration":600,
                                "id":"Animation23_L",
                                "textAlign":"left",
                                "value":"EXHALE THE<br>PAST",
                                "colors":[],
                                "timing":[],
                                "style": {
                                    "width": 981.71, "height": 238.4, "x": 104.91, "y": 61.63
                                }
                                ,
                                "fonts":[ {
                                    "font": "Quicksand", "weight": 400
                                }
                                ]
                            }
                            ,
                            "style":[],
                            "timing":[],
                            "children":[],
                            "disabled":false,
                            "hidden":false,
                            "autofocus":true,
                            "registeredToGrid":true
                        }
                        ],
                        "isOffstage":false
                    }
                    ,
                    {
                        "layout":"CONTAINER",
                        "type":"outro",
                        "guid":"baa-89b9-8a9",
                        "config":[],
                        "data":[],
                        "style":[],
                        "timing": {
                            "start": 9.8, "end": 15
                        }
                        ,
                        "children":[ {
                            "layout":"lottie",
                            "type":"outro",
                            "guid":"99a-9bbb-89a",
                            "config":[],
                            "data": {
                                "name":"Outro04",
                                "inDuration":2000,
                                "outDuration":0,
                                "id":"Outro04_widescreen_L",
                                "textAlign":"left",
                                "action_01": {
                                    "value": "YOGA CLASSES"
                                }
                                ,
                                "action_02": {
                                    "value": "EVERY EVENING"
                                }
                                ,
                                "phone": {
                                    "value": "212-555-1234"
                                }
                                ,
                                "address": {
                                    "value": "123 Main St"
                                }
                                ,
                                "disclaimer": {
                                    "value": ""
                                }
                                ,
                                "website": {
                                    "value": "www.yoursite.com"
                                }
                                ,
                                "date": {
                                    "value": "January 01"
                                }
                                ,
                                "time": {
                                    "value": "10AM - 02PM"
                                }
                                ,
                                "hashtag": {
                                    "value": "#YourHashtag"
                                }
                                ,
                                "fb": {
                                    "value": "@YourFacebook"
                                }
                                ,
                                "insta": {
                                    "value": "@YourInstagram"
                                }
                                ,
                                "tw": {
                                    "value": "@YourTwitter"
                                }
                                ,
                                "colors":["rgb(255, 255, 255)",
                                "rgb(255, 114, 0)"],
                                "logo": {
                                    "type":"image",
                                    "value":"\/promoVideos\/user\/best-fit-logo?s=video&url=https:\/\/ez-promo-videos-users.s3.amazonaws.com\/logos\/promoVideos\/videos\/bd\/d4\/bdd41f09ef84eeeb5b6727cdf3bed4e1\/1523522186.png",
                                    "style": {
                                        "backgroundColor": "rgba(255,255,255,0)", "width": 137.02838063439, "height": 137.02838063439, "top": 81.255425709516, "left": 81.255425709516, "shape": "none", "imageOriginWidth": 1000, "imageOriginHeight": 1000, "imageWidth": "100%", "imageHeight": "100%"
                                    }
                                }
                                ,
                                "background": {
                                    "type": "color", "value": "rgba(0,0,0,0)"
                                }
                                ,
                                "style":[],
                                "fonts":[ {
                                    "font": "Quicksand", "weight": 400
                                }
                                ]
                            }
                            ,
                            "style":[],
                            "timing":[],
                            "children":[],
                            "disabled":false,
                            "hidden":false,
                            "autofocus":true,
                            "registeredToGrid":true
                        }
                        ,
                        {
                            "layout":"LOGO",
                            "guid":"99b-a98a-998",
                            "config":[],
                            "data": {
                                "type": "image", "value": "\/promoVideos\/user\/best-fit-logo?s=video&url=https:\/\/ez-promo-videos-users.s3.amazonaws.com\/logos\/promoVideos\/videos\/bd\/d4\/bdd41f09ef84eeeb5b6727cdf3bed4e1\/1523522186.png"
                            }
                            ,
                            "style": {
                                "backgroundColor": "rgba(255,255,255,0)", "width": 137.02838063439, "height": 137.02838063439, "minHeight": 252, "minWidth": 252, "color": "", "fontFamly": "Lobster", "fontFamily": "Montserrat", "padding": null, "fontWeight": "700", "left": 81.255425709516, "top": 81.255425709516, "shape": "none", "imageHeight": "100%", "imageWidth": "100%", "borderRadius": "0", "imageOriginWidth": 1000, "imageOriginHeight": 1000
                            }
                            ,
                            "timing":[],
                            "children":[],
                            "disabled":false,
                            "hidden":false,
                            "autofocus":true,
                            "registeredToGrid":true,
                            "shape":"none"
                        }
                        ],
                        "isOffstage":false
                    }
                    ],
                    "userData": {
                        "recentColors": ["#ffffff", "rgb(98, 81, 220)", "rgb(174, 30, 176)", "rgb(255, 255, 255)", "rgb(107, 37, 37)"]
                    }
                }
                ,
                "theme":null,
                "vertical":null,
                "videoUrl":"https:\/\/ak03-video-cdn.slidely.com\/promoVideos\/videos\/5a\/cf\/5acf1a8e6e1a2fc0182054d6\/preview.mp4?dv=6",
                "videoThumb":"https:\/\/ak02-cdn.slidely.com\/promoVideos\/videos\/5a\/cf\/5acf1a8e6e1a2fc0182054d6\/thumb.jpg?dv=6",
                "createdAt":"2018-04-12T08:36:30+00:00",
                "finalCaptionBackgroundColor":"",
                "businessName":"",
                "keyword":"yoga",
                "selectedVideosIds":["f9ef79286b341ea98a0718ea0cf281a1"],
                "salt":"d04e94bf8ca3d4838f3360159e72b7ab",
                "isUpload":false,
                "isFreeVideo":false,
                "clips":[ {
                    "video": {
                        "videoId": "f9ef79286b341ea98a0718ea0cf281a1", "previewUrl": "https:\/\/ak01-video-cdn.slidely.com\/media\/videos\/f9\/ef\/f9ef79286b341ea98a0718ea0cf281a1-720p-preview.mp4", "smallPreviewUrl": "https:\/\/ak03-video-cdn.slidely.com\/media\/videos\/f9\/ef\/f9ef79286b341ea98a0718ea0cf281a1-180-preview.mp4", "thumbnailUrl": "https:\/\/ak02-cdn.slidely.com\/promoVideos\/view\/video-image\/videoId\/f9ef79286b341ea98a0718ea0cf281a1\/s\/video-thumbnail", "title": "Woman silhouette arms raised on beach at twilight", "duration": 17.72, "resolution": "720P", "isCollection": false, "isUpload": false, "isFree": false, "source": "getty", "rawVideoIds": ["f9ef79286b341ea98a0718ea0cf281a1"], "footageThumbnail": null, "ratio": "16:9", "tags": ["Adult", "Arms Outstretched", "Arms Raised", "Aura", "Back Lit", "Balance", "Beach", "Beautiful People", "Beauty", "Body Care", "Body Conscious", "Breathing Exercise", "Chakra", "Concepts", "Dawn", "Dusk", "El Nido", "Females", "Film", "Getting Away From It All", "Gratitude", "HD Format", "Healthy Lifestyle", "Horizontal", "Human Arm", "Human Body Part", "Human Limb", "Imagination", "Inspiration", "Limb", "Nature", "Non US Location", "Outdoors", "Palawan", "Philippines", "Positive Emotion", "Purity", "Relaxation", "Relief - Emotion", "Religion", "Serene People", "Silhouette", "Spirituality", "Strength", "Stretching", "Sunrise - Dawn", "Sunset", "The Human Body", "Tourist Resort", "Tranquil Scene", "Tropical Climate", "Twilight", "Vacations", "Water's Edge", "Wellbeing", "Women", "Yoga", "Young Adult", "Young Women", "Zen-like"]
                    }
                    ,
                    "crop":null,
                    "thumbnail":"https:\/\/ak04-cdn.slidely.com\/media\/videos\/f9\/ef\/thumbs\/f9ef79286b341ea98a0718ea0cf281a1--thumb-0.jpg",
                    "start":0,
                    "end":13.92,
                    "timeline": {
                        "start": {
                            "timestamp": 0, "transition": "cut", "transitionDuration": 0
                        }
                        ,
                        "end": {
                            "timestamp": 13.92, "transition": "blur", "transitionDuration": 1
                        }
                    }
                }
                ],
                "reportDefaults": {
                    "editorVersion":"2.5",
                    "keyword":"472931885",
                    "item_source":"organic",
                    "item_clickedOn":"dashboard_page",
                    "isCollection":true,
                    "originCollectionId":"57470942374e27e33d7b23c8",
                    "isUploadedMusic":false,
                    "countOfUniqueAnimationUsed":2,
                    "animationArray":["Animation23",
                    "Animation23",
                    "Outro04"],
                    "fontArray":[ {
                        "font": "Quicksand", "weight": 400
                    }
                    ,
                    {
                        "font": "Quicksand", "weight": 400
                    }
                    ,
                    {
                        "font": "Quicksand", "weight": 400
                    }
                    ],
                    "captionStyleArray":[ {
                        "animationId":"Animation23",
                        "font":[ {
                            "font": "Quicksand", "weight": 400
                        }
                        ]
                    }
                    ,
                    {
                        "animationId":"Animation23",
                        "font":[ {
                            "font": "Quicksand", "weight": 400
                        }
                        ]
                    }
                    ,
                    {
                        "animationId":"Outro04",
                        "font":[ {
                            "font": "Quicksand", "weight": 400
                        }
                        ]
                    }
                    ],
                    "outro":"Outro04",
                    "numCaptions":3,
                    "firstCaptionStartSec":1,
                    "captionAvgDuration":4.5,
                    "shortestCaptionDuration":4,
                    "longestCaptionDuration":5,
                    "isMulti":false,
                    "numClips":1,
                    "outro_has_action_01":true,
                    "outro_has_action_02":true,
                    "outro_has_address":true,
                    "outro_has_background":false,
                    "outro_has_date":true,
                    "outro_has_disclaimer":false,
                    "outro_has_fb":true,
                    "outro_has_hashtag":true,
                    "outro_has_insta":true,
                    "outro_has_phone":true,
                    "outro_has_time":true,
                    "outro_has_tw":true,
                    "outro_has_website":true,
                    "withYourTextGoesHere":false,
                    "captions":["INHALE THE FUTURE",
                    "EXHALE THE PAST"],
                    "isFreeToUse":false
                }
            }
            ,
            "videoPrice":"59.99",
            "themes":null,
            "baseUrl":"https:\/\/slide.ly",
            "isDemoMode":null,
            "state":"create-from",
            "userEmail":null,
            "chargeUrl":"",
            "userToken":"cd99a7302d2b13a76a27b400d411f241",
            "keyword":"yoga",
            "isSearch":false,
            "basicScripts": {
                "captions_none": {
                    "layer_0":[ {
                        "start": {
                            "timestamp": 0, "transition": "cut"
                        }
                        ,
                        "end": {
                            "timestamp": 10.2, "transition": "blur", "fadeDuration": 1
                        }
                        ,
                        "offset":0,
                        "type":0,
                        "videoId":""
                    }
                    ],
                    "layer_1":[ {
                        "start": {
                            "timestamp": 10.2, "transition": "fade", "fadeDuration": 1
                        }
                        ,
                        "end": {
                            "timestamp": 15.08, "transition": "cut"
                        }
                        ,
                        "offset":0,
                        "type":0
                    }
                    ]
                }
                ,
                "captions_none_full_duration": {
                    "layer_0":[ {
                        "start": {
                            "timestamp": 0, "transition": "cut"
                        }
                        ,
                        "end": {
                            "timestamp": 15, "transition": "cut"
                        }
                        ,
                        "offset":0,
                        "type":0,
                        "videoId":""
                    }
                    ],
                    "layer_1":[ {
                        "start": {
                            "timestamp": 10.2, "transition": "fade", "fadeDuration": 1
                        }
                        ,
                        "end": {
                            "timestamp": 15.08, "transition": "cut"
                        }
                        ,
                        "offset":0,
                        "type":0
                    }
                    ]
                }
                ,
                "captions_single": {
                    "layer_0":[ {
                        "start": {
                            "timestamp": 0, "transition": "cut"
                        }
                        ,
                        "end": {
                            "timestamp": 10.2, "transition": "blur", "fadeDuration": 1
                        }
                        ,
                        "offset":0,
                        "type":0,
                        "videoId":""
                    }
                    ],
                    "layer_1":[ {
                        "start": {
                            "timestamp": 4.08, "transition": "fade", "fadeDuration": 1
                        }
                        ,
                        "end": {
                            "timestamp": 8.4, "transition": "fade", "fadeDuration": 1
                        }
                        ,
                        "offset":0,
                        "type":0
                    }
                    ,
                    {
                        "start": {
                            "timestamp": 10.2, "transition": "fade", "fadeDuration": 1
                        }
                        ,
                        "end": {
                            "timestamp": 15.08, "transition": "cut"
                        }
                        ,
                        "offset":0,
                        "type":0
                    }
                    ]
                }
                ,
                "captions_single_full_duration": {
                    "layer_0":[ {
                        "start": {
                            "timestamp": 0, "transition": "cut"
                        }
                        ,
                        "end": {
                            "timestamp": 15, "transition": "cut"
                        }
                        ,
                        "offset":0,
                        "type":0,
                        "videoId":""
                    }
                    ],
                    "layer_1":[ {
                        "start": {
                            "timestamp": 4.08, "transition": "fade", "fadeDuration": 1
                        }
                        ,
                        "end": {
                            "timestamp": 8.4, "transition": "fade", "fadeDuration": 1
                        }
                        ,
                        "offset":0,
                        "type":0
                    }
                    ,
                    {
                        "start": {
                            "timestamp": 10.2, "transition": "fade", "fadeDuration": 1
                        }
                        ,
                        "end": {
                            "timestamp": 15.08, "transition": "cut"
                        }
                        ,
                        "offset":0,
                        "type":0
                    }
                    ]
                }
                ,
                "captions_two": {
                    "layer_0":[ {
                        "start": {
                            "timestamp": 0, "transition": "cut"
                        }
                        ,
                        "end": {
                            "timestamp": 10.8, "transition": "blur", "fadeDuration": 1
                        }
                        ,
                        "offset":0,
                        "type":0,
                        "videoId":""
                    }
                    ],
                    "layer_1":[ {
                        "start": {
                            "timestamp": 1, "transition": "fade", "fadeDuration": 1
                        }
                        ,
                        "end": {
                            "timestamp": 4, "transition": "fade", "fadeDuration": 1
                        }
                        ,
                        "offset":0,
                        "type":0
                    }
                    ,
                    {
                        "start": {
                            "timestamp": 6, "transition": "fade", "fadeDuration": 1
                        }
                        ,
                        "end": {
                            "timestamp": 9, "transition": "fade", "fadeDuration": 1
                        }
                        ,
                        "offset":0,
                        "type":0
                    }
                    ,
                    {
                        "start": {
                            "timestamp": 10.8, "transition": "fade", "fadeDuration": 1
                        }
                        ,
                        "end": {
                            "timestamp": 15.08, "transition": "cut"
                        }
                        ,
                        "offset":0,
                        "type":0
                    }
                    ]
                }
                ,
                "captions_two_full_duration": {
                    "layer_0":[ {
                        "start": {
                            "timestamp": 0, "transition": "cut"
                        }
                        ,
                        "end": {
                            "timestamp": 15, "transition": "cut"
                        }
                        ,
                        "offset":0,
                        "type":0,
                        "videoId":""
                    }
                    ],
                    "layer_1":[ {
                        "start": {
                            "timestamp": 1, "transition": "fade", "fadeDuration": 1
                        }
                        ,
                        "end": {
                            "timestamp": 4, "transition": "fade", "fadeDuration": 1
                        }
                        ,
                        "offset":0,
                        "type":0
                    }
                    ,
                    {
                        "start": {
                            "timestamp": 6, "transition": "fade", "fadeDuration": 1
                        }
                        ,
                        "end": {
                            "timestamp": 9, "transition": "fade", "fadeDuration": 1
                        }
                        ,
                        "offset":0,
                        "type":0
                    }
                    ,
                    {
                        "start": {
                            "timestamp": 10.8, "transition": "fade", "fadeDuration": 1
                        }
                        ,
                        "end": {
                            "timestamp": 15.08, "transition": "cut"
                        }
                        ,
                        "offset":0,
                        "type":0
                    }
                    ]
                }
            }
            ,
            "keywordsMapping": {
                "default": {
                    "keyword": "fun"
                }
                ,
                "Real Estate": {
                    "keyword":"Home",
                    "children": {
                        "Broker": "Real Estate"
                    }
                }
                ,
                "Beauty & Care": {
                    "keyword":"Cosmetics",
                    "children": {
                        "Hair Styling": "Hair Styles", "Beauty salon": "Beauty Salon", "Cosmetics": "Cosmetics", "Perfume": "Perfume"
                    }
                }
                ,
                "Books": {
                    "keyword":"Literature",
                    "children": {
                        "Author\/Writer": "Writer", "Book Store": "Book Store", "Children's Book": "Children's Book", "Library": "Library", "Publishing": "Publishing", "Other": "Literature"
                    }
                }
                ,
                "Digital Marketing": {
                    "keyword": "Fun"
                }
                ,
                "Education": {
                    "keyword":"Education",
                    "children": {
                        "Higher Education": "University", "School": "School", "Teaching": "Teaching", "University\/College": "Academic", "University Lecturer\/Professor": "Professor"
                    }
                }
                ,
                "Fashion & Style": {
                    "keyword":"fashion",
                    "children": {
                        "Eyewear": "Sunglasses", "Footwear": "Shoes", "Jewellery": "jewellery"
                    }
                }
                ,
                "Financial Services": {
                    "keyword":"Finance",
                    "children": {
                        "Life Insurance": "Insurance"
                    }
                }
                ,
                "Food": {
                    "keyword":"Food",
                    "children": {
                        "Bar": "alcohol", "Coffee Shop": "coffee", "Pizza": "Pizza", "Restaurant": "Restaurant", "Winery": "Wine"
                    }
                }
                ,
                "Health & Fitness": {
                    "keyword":"Health and Fitness",
                    "children": {
                        "Fitness": "Fitness", "Gym": "Gym", "Nutrition": "nutrition", "Spa": "spa", "Yoga": "yoga"
                    }
                }
                ,
                "Home Construction": {
                    "keyword":"Home Construction",
                    "children": {
                        "Architecture": "Architecture", "Blinds": "window blinds", "Building": "Builder", "Carpentry & Woodworking": "Woodwork", "Construction": "Construction", "Contracting": "Contractor", "Electricity": "Electrician", "Engineering": "Engineer", "Flooring": "Flooring", "Home Automation": "Home Automation", "Home Improvement": "Home Improvement", "Home Inspection": "Home Inspection", "HVAC": "HVAC", "Interior Design": "Interior Design", "Kitchen": "kitchen builder", "Landscaping": "Landscaping", "Lighting": "Lighting", "Plumbing": "Plumbing", "Remodeling": "house remodeling", "Restoration": "Restoration", "Roofing": "Roofing", "Sign": "construction signs", "Swimming Pools": "Pool Contractor", "Waste Management": "Waste Management", "Welding": "Welding"
                    }
                }
                ,
                "Legal": {
                    "keyword":"Legal",
                    "children": {
                        "Attorney": "Lawyer", "Law Firm": "Lawyer"
                    }
                }
                ,
                "Medical": {
                    "keyword": "Medical"
                }
                ,
                "Music": {
                    "keyword":"Music",
                    "children": {
                        "Musician\/Band": "Musical Band", "Concert": "Musical Concert", "DJ": "Music DJ", "Festival": "Music Festival", "Hip Hop & Rap Artist": "Hip Hop", " Karaoke": "Karaoke", "Music Entertainment": "Music Entertainment", "Music Lessons": "Music Lesson", " Music School": "Music School", " Music Store": "Music Store", " Music Video": "Music Video", " Musician": "Musician", "Production": "Music Production", " Promotion": "Music", "Record Label": "Record Label", " Recording Studio": "Recording Studio", " Singer": "Singer", "Other": "Music"
                    }
                }
                ,
                "Non-Profit": {
                    "keyword":"Non-Profit",
                    "children": {
                        "Activism": "Activist", "Charity": "Charity", "Community Service": "Community Service", "Humanitarian": "Humanitarian", "Non-Profit": "Non-Profit", "Philanthropy": "Philanthropy", "Social Services": "Social Services", "Veteran Welfare": "Veteran", "Volunteer": "Volunteer"
                    }
                }
                ,
                "Pets": {
                    "keyword": "pets"
                }
                ,
                "Personal": {
                    "keyword":"Love",
                    "children": {
                        "Children": "Children", "Dating": "Dating", "Family": "Family", "Friendship": "Friendship", "Happiness": "Happiness", "Lifestyle": "Lifestyle", "Love": "Love", "Parenting": "Parents", "Relationships": "Relationship", "Women": "Women"
                    }
                }
                ,
                "Politics": {
                    "keyword": "Government"
                }
                ,
                "Professional Services": {
                    "keyword":"Professional Services",
                    "children": {
                        "Appliance Repair": "Appliance Repair", "Carpet Cleaning": "Carpet Cleaning", "Childcare": "Childcare", "Cleaning Services": "Cleaning Services", "Delivery": "Delivery", "Electrician": "Electrician", "Handyman": "Handyman", "Home Services": "Home Services", "House Cleaning": "House Cleaning", "Janitorial": "Janitorial", "Junk Removal": "Junk Removal", "Laundry & Dry Cleaning": "Dry Cleaning", "Lawn Care": "Lawn Care", "Locksmith": "Locksmith", "Moving": "Moving", "Personal Shopping": "Personal Shopping", "Phone Repair": "Phone Repair", "Plumbing": "Plumbing", "Pressure Washing": "Pressure Washing", "Printing": "Printing", "Recycling": "Recycling", "Shipping": "Shipping", "Storage": "Storage", "Translation": "Translation", "Tree Maintenance": "Tree Maintenance", "Virtual Assistant": "Virtual Assistant", "Water Treatment": "Water Treatment", "Window Services": "Window Services", "Working From Home": "Working From Home", "Other": "Professional Services"
                    }
                }
                ,
                "Religion": {
                    "keyword":"Religions",
                    "children": {
                        "Church": "Churches", "Faith Group": "Faith Group", "Ministry": "Ministry", "Mosque": "Mosque", "Spirituality": "Spirituality", "Synagogue": "Jewish Synagogue", "Youth Group": "Youth Groups"
                    }
                }
                ,
                "Retail & Ecommerce": {
                    "keyword": "Shopping"
                }
                ,
                "Sports": {
                    "keyword":"Sports",
                    "children": {
                        "Golf": "Golf", "Scuba Diving": "Scuba", "Soccer": "Soccer"
                    }
                }
                ,
                "Travel & Tourism": {
                    "keyword":"Travel",
                    "children": {
                        "Adventure": "Adventure", "Camping": "Camping", "Vacation Packages": "Vacation"
                    }
                }
                ,
                "Venue": {
                    "keyword":"Venue",
                    "children": {
                        "Art Gallery": "Art Gallery", "Casino": "Casino", "Cinema": "Cinema", "Coworking Space": "Coworking Space", "Escape Room": "Escape Room", "Funeral Home": "Funeral Room", "Haunted House": "Haunted House", "Museum": "Museum", "Music Venue": "Music Venue", "Nightclub": "Nightclub", "Office": "Office", "Swimming Pool": "Swimming Pool"
                    }
                }
                ,
                "Children": {
                    "keyword": "Children"
                }
                ,
                "Weddings": {
                    "keyword": "Wedding"
                }
                ,
                "Automotive": {
                    "keyword":"Cars",
                    "children": {
                        "Auto Repair": "Auto Repair", "Car Wash": "Car Wash", "Mechanic": "Mechanic", "Private Driver": "Chauffeur ", "Sales": "Car Sales", "Sport Car": "Sports Car", "Towing": "Towing", "Used Car Sales": "Used Car Sales"
                    }
                }
            }
            ,
            "isIstockUser":false,
            "hidePricingFooter":false,
            "hasSubscription":false,
            "isGuest":null,
            "isOnetimeCoupon":false,
            "isOnboardScriptEnabled":true,
            "basePromoUrl":"https:\/\/slide.ly\/promo",
            "uploadDomain":"d3oeruu4jcziz1.cloudfront.net",
            "showUpload":true,
            "isApectRatioEnabled":true,
            "isMulticlipsEnabled":true,
            "isTextStylesEnabled":false,
            "isSearchSortEnabled":true,
            "isCollectionOpenedEnabled":true,
            "isMusicFiltersRedesign":false,
            "showPostPlaybackCTA":true,
            "thumbnailPatterns": {
                "library":"https:\/\/ak03-cdn.slidely.com\/media\/videos\/{videoid-12}\/{videoid-34}\/thumbs\/{videoid}--thumb-{timestamp}.jpg",
                "upload":"https:\/\/ak03-cdn.slidely.com\/pvUploadedVideos\/{videoid-12}\/{videoid-34}\/thumbs\/{videoid}--thumb-{timestamp}.jpg"
            }
            ,
            "isPhotoUploadEnabled":false,
            "collectionTabs":[ {
                "title": "Summer Collection", "keyword": "Summer", "slug": "Summer", "coverImageURL": "https:\/\/ak04-cdn.slidely.com\/images\/promoVideos\/search\/holiday-head.jpg"
            }
            ],
            "isRevision":false,
            "revisionToken":null,
            "reportUserOptimization":false,
            "isFromMagicLink":false,
            "isUseSubcategoryAsKeyword":false,
            "isUseDefaultKeyword":false,
            "isDownloadBtnLabel":false,
            "isFullPageWizard":false
        }
        ,
        "comp\/billing-button\/view": {
            "key": "pk_live_CCJx2kj8LLGZLFyzFAaM7gEO", "logo": "\/images\/promoVideos\/promo-logo-stripe.png"
        }
        ,
        "apps\/promoVideos\/parts\/payment-successful-popup": {
            "submitUrl": ""
        }
    }
    ,
    "paths": {
        "apps": "applications", "comp": "components", "libs": "libraries", "ez": "libraries\/ez", "system": "libraries\/system", "text": "libraries\/text", "promoTpl": "\/templates\/applications\/promoVideos", "jquery": ["\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/2.0.0\/jquery.min", "libraries\/jquery"], "jquery-ui": ["\/\/ajax.googleapis.com\/ajax\/libs\/jqueryui\/1.12.0\/jquery-ui.min"], "backbone": "libraries\/backbone", "underscore": "libraries\/underscore", "handlebars": "libraries\/handlebars", "hammerjs": "libraries\/jquery\/hammer", "tweenmax": "libraries\/greensock\/TweenMax.min", "snapsvg": "libraries\/snap.svg", "webfont": "libraries\/webfont", "google-ima3": "\/\/s0.2mdn.net\/instream\/html5\/ima3"
    }
    ,
    "baseUrl":"https:\/\/ak01-cdn.slidely.com\/1531928516\/scripts-minified",
    "waitSeconds":60
}

;