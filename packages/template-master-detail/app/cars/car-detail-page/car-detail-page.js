const topmost = require("tns-core-modules/ui/frame").topmost;

const CarDetailViewModel = require("./car-detail-view-model");

function onNavigatingTo(args) {
    if (args.isBackNavigation) {
        return;
    }

    const page = args.object;

    page.bindingContext = new CarDetailViewModel(page.navigationContext);
}

function onBackButtonTap() {
    topmost().goBack();
}

function onEditButtonTap(args) {
    const bindingContext = args.object.bindingContext;

    topmost().navigate({
        moduleName: "cars/car-detail-edit-page/car-detail-edit-page",
        context: bindingContext.car,
        animated: true,
        transition: {
            name: "slideTop",
            duration: 200,
            curve: "ease"
        }
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackButtonTap = onBackButtonTap;
exports.onEditButtonTap = onEditButtonTap;
