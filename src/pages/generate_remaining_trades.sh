#!/bin/bash

# Base directory
DIR="/Users/lllitadmin/Antigravity project/Agency-landing-page/src/pages"
SOURCE="$DIR/PlumbingWebsites.jsx"

# Function to generate trade-specific file
generate_trade_file() {
    local COMPONENT=$1
    local TRADE=$2
    local TRADE_LOWER=$3
    local ICON=$4
    local ICON_IMPORT=$5
    local AUDIENCE=$6
    local H1=$7
    local SUBHEADLINE=$8
    local BADGE_TEXT=$9
    local BULLET1_TITLE="${10}"
    local BULLET1_DETAIL="${11}"
    local BULLET2_TITLE="${12}"
    local BULLET2_DETAIL="${13}"
    local BULLET3_TITLE="${14}"
    local BULLET3_DETAIL="${15}"
    local BULLET4_TITLE="${16}"
    local BULLET4_DETAIL="${17}"
    local SEARCH_TERM="${18}"
    local PACKAGE2_DESC="${19}"
    local CONTACT_BUSINESS="${20}"
    local CONTACT_H2="${21}"
    
    local OUTPUT="$DIR/${COMPONENT}.jsx"
    
    # Create the file with replacements
    sed -e "s/PlumbingWebsites/$COMPONENT/g" \
        -e "s/'Plumbing'/'$TRADE'/g" \
        -e "s/plumbing-websites/${TRADE_LOWER}-websites/g" \
        -e "s/Plumbing Website Design/${TRADE} Website Design/g" \
        -e "s/Plumbers and Plumbing Businesses/${AUDIENCE}/g" \
        -e "s/FOR AUSTRALIAN PLUMBERS/FOR AUSTRALIAN ${AUDIENCE}/g" \
        -e "s/Stop Losing Jobs to <br \/>.*Plumbers With Better Websites.*<\\/span>/${H1}/g" \
        -e "s/When a homeowner has a burst pipe at 2 AM.*/${SUBHEADLINE}/g" \
        -e "s/Websites built specifically for Australian plumbers/Websites built specifically for Australian ${TRADE_LOWER}s/g" \
        -e "s/Built for plumbers/Built for ${TRADE_LOWER}s/g" \
        -e "s/Built for Australian plumbers/Built for Australian ${TRADE_LOWER}s/g" \
        -e "s/For Plumbers/For ${BADGE_TEXT}/g" \
        -e "s/Wrench/$ICON_IMPORT/g" \
        -e "s/<Wrench/<${ICON}/g" \
        -e "s/Why plumbing businesses/Why ${TRADE_LOWER} businesses/g" \
        -e "s/'plumber near me'/'${SEARCH_TERM}'/g" \
        -e "s/What Makes a Plumber's Website/What Makes a ${TRADE}'s Website/g" \
        -e "s/Optimised for 'plumber near me'/Optimised for '${SEARCH_TERM}'/g" \
        -e "s/Common Questions From Plumbers/Common Questions From ${AUDIENCE}/g" \
        -e "s/FOR PLUMBERS WHO WANT STEADY ENQUIRIES/${PACKAGE2_DESC}/g" \
        -e "s/Your plumbing business/${CONTACT_BUSINESS}/g" \
        -e "s/Quality Plumbing Jobs/${CONTACT_H2}/g" \
        "$SOURCE" > "$OUTPUT"
    
    echo "Generated: $OUTPUT"
}

# Note: Due to the complexity of the bullet point replacements and the structure,
# I'll use the direct Write approach for each file instead
echo "Script prepared. Use direct file writing for accurate replacements."
